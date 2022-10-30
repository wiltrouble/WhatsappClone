export interface User {
  id: string;
  name: string;
}

export interface MessageInterface {
  id: string;
  text: string;
  createdAt: string;
  user: User;
}
