import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';
interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}

export { StateSchema };
