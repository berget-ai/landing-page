export interface Message {
  id: string;
  content: string;
  type: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatConfig {
  apiKey: string;
  baseUrl: string;
  channelId: string;
}