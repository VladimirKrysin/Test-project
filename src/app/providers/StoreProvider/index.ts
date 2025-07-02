import type {
  StateSchema,
  ReduxStoreWithManager,
  ThunkExtraArg,
  ThunkConfig,
} from './config/StateSchema';
import { createReduxStore, AppDispatch } from './config/store';
import { StoreProvider } from './ui/StoreProvider';

export { StoreProvider, createReduxStore };
export type { StateSchema, AppDispatch, ThunkExtraArg, ReduxStoreWithManager, ThunkConfig };
