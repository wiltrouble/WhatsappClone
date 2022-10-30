
  export interface User {
    id: string;
    name: string;
    image: string;
  }

  export interface LastMessage {
    id: string;
    text: string;
    createdAt: string;
  }

  export interface ChatListItemInterface {
    id?: string;
    user: User;
    lastMessage: LastMessage;
  }
