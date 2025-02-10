import { type Message } from '@/types/chat'

interface OdooChatConfig {
  apiKey: string
  baseUrl: string
  channelId: string
}

class OdooChat {
  private config: OdooChatConfig
  private ws: WebSocket | null = null

  constructor(config: OdooChatConfig) {
    this.config = config
  }

  connect() {
    try {
      this.ws = new WebSocket(`${this.config.baseUrl}/websocket/chat`)

      this.ws.onopen = () => {
        this.authenticate()
      }

      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data)
        if (data.type === 'authentication_success') {
          this.joinChannel()
        }
      }

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error)
      }

      this.ws.onclose = () => {
        setTimeout(() => this.connect(), 5000) // Reconnect after 5 seconds
      }
    } catch (error) {
      console.error('Failed to connect to Odoo chat:', error)
    }
  }

  private authenticate() {
    if (!this.ws) return

    this.ws.send(
      JSON.stringify({
        type: 'authenticate',
        apiKey: this.config.apiKey,
      }),
    )
  }

  private joinChannel() {
    if (!this.ws) return

    this.ws.send(
      JSON.stringify({
        type: 'join_channel',
        channelId: this.config.channelId,
      }),
    )
  }

  async sendMessage(content: string): Promise<void> {
    if (!this.ws) {
      throw new Error('WebSocket not connected')
    }

    this.ws.send(
      JSON.stringify({
        type: 'message',
        channelId: this.config.channelId,
        content,
      }),
    )
  }

  onMessage(callback: (message: Message) => void) {
    if (!this.ws) return

    this.ws.addEventListener('message', (event) => {
      const data = JSON.parse(event.data)
      if (data.type === 'message') {
        callback({
          id: data.id,
          content: data.content,
          type: data.sender_type === 'agent' ? 'bot' : 'user',
          timestamp: new Date(data.timestamp),
        })
      }
    })
  }

  disconnect() {
    if (this.ws) {
      this.ws.close()
      this.ws = null
    }
  }
}

export function createOdooChat(config: OdooChatConfig) {
  return new OdooChat(config)
}
