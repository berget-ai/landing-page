import { useState, useEffect, useCallback } from 'react';
import { createOdooChat } from '@/lib/odoo';
import type { Message, ChatConfig } from '@/types/chat';

export function useChat(config: ChatConfig) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Validate configuration
    if (!config.apiKey || !config.baseUrl || !config.channelId) {
      setError('Chat configuration is incomplete');
      return;
    }

    const chat = createOdooChat(config);

    try {
      chat.connect();
      setIsConnected(true);
      setError(null);

      // Add initial welcome message
      setMessages([{
        id: 'welcome',
        content: 'Hello! How can I help you today?',
        type: 'bot',
        timestamp: new Date()
      }]);

      chat.onMessage((message) => {
        setMessages((prev) => [...prev, message]);
        setIsTyping(false);
      });

      return () => {
        chat.disconnect();
        setIsConnected(false);
      };
    } catch (err) {
      setError('Failed to connect to chat service');
      setIsConnected(false);
    }
  }, [config.apiKey, config.baseUrl, config.channelId]);

  const sendMessage = useCallback(async (content: string) => {
    if (!isConnected) {
      setError('Chat is not connected');
      return;
    }

    try {
      const userMessage: Message = {
        id: Date.now().toString(),
        content,
        type: 'user',
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);
      setError(null);

      await chat.sendMessage(content);
    } catch (err) {
      setError('Failed to send message');
      setIsTyping(false);
    }
  }, [isConnected]);

  return {
    messages,
    isConnected,
    isTyping,
    error,
    sendMessage
  };
}