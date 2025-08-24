export interface DbContent {
  users?: Array<{
    id: number;
    name: string;
    email: string;
  }>;
  metadata?: {
    version: string;
    created: string;
  };
  [key: string]: any;
}