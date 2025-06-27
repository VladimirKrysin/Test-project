import type { CounterSchema } from 'entities/Counter/model/types/CounterSchema';
import { Counter } from './ui/Counter';
import { counterReducer } from './model/slice/CounterSlice';

export { Counter, counterReducer };
export type { CounterSchema };
