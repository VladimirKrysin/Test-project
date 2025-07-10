import { User } from 'entities/User';

interface Comment {
  id: string;
  text: string;
  user: User;
}

export { Comment };
