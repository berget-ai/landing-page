import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MessageSquare,
  X,
  Send,
  Bot,
  Loader2,
  AlertCircle,
  RefreshCw,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { useChat } from '@/hooks/use-chat'

const CHAT_CONFIG = {
  apiKey: import.meta.env.VITE_ODOO_API_KEY,
  baseUrl: import.meta.env.VITE_ODOO_BASE_URL,
  channelId: import.meta.env.VITE_ODOO_CHANNEL_ID,
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')

  const { messages, isTyping, error, isConnected, sendMessage } =
    useChat(CHAT_CONFIG)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    await sendMessage(input)
    setInput('')
  }

  const renderErrorState = () => (
    <div className="flex flex-col items-center justify-center h-[400px] p-6 text-center">
      <AlertCircle className="w-12 h-12 text-muted-foreground mb-4" />
      <p className="text-muted-foreground mb-4">
        {error || 'Unable to connect to chat service'}
      </p>
      <Button
        variant="secondary"
        onClick={() => window.location.reload()}
        className="gap-2"
      >
        <RefreshCw className="w-4 h-4" />
        Try Again
      </Button>
    </div>
  )

  return (
    <>
      <Button
        size="icon"
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg"
        onClick={() => setIsOpen(true)}
      >
        <MessageSquare className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 w-[400px] rounded-2xl border border-border bg-background shadow-xl"
          >
            <div className="flex items-center justify-between p-4 border-b border-border">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5" />
                <span className="font-medium">Berget Support</span>
                {isConnected && (
                  <span className="w-2 h-2 rounded-full bg-foreground/50" />
                )}
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            <div className="h-[400px] overflow-y-auto p-4 space-y-4">
              {error ? (
                renderErrorState()
              ) : (
                <>
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={cn(
                        'flex gap-2 items-start',
                        message.type === 'user' && 'flex-row-reverse',
                      )}
                    >
                      <div
                        className={cn(
                          'w-8 h-8 rounded-full flex items-center justify-center shrink-0',
                          message.type === 'bot' ? 'bg-muted' : 'bg-muted',
                        )}
                      >
                        {message.type === 'bot' ? (
                          <Bot className="h-4 w-4 text-foreground/70" />
                        ) : (
                          <MessageSquare className="h-4 w-4" />
                        )}
                      </div>
                      <div
                        className={cn(
                          'rounded-2xl px-4 py-2 max-w-[75%]',
                          message.type === 'bot'
                            ? 'bg-muted'
                            : 'bg-primary text-primary-foreground',
                        )}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex gap-2 items-start">
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                        <Bot className="h-4 w-4 text-foreground/70" />
                      </div>
                      <div className="rounded-2xl px-4 py-2 bg-muted">
                        <Loader2 className="h-4 w-4 animate-spin" />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>

            <form
              onSubmit={handleSubmit}
              className="p-4 border-t border-border"
            >
              <div className="flex gap-2">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                  disabled={!isConnected || !!error}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || !isConnected || !!error}
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
