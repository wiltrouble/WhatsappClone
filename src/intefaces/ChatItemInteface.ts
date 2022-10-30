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

export interface ChatListItem {
  id: string;
  user: User;
  lastMessage: LastMessage;
}
