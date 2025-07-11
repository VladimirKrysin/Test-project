import { StateSchema } from 'app/providers/StoreProvider';

const getAddCommentFormText = (state: StateSchema) => state.addCommentForm?.text || '';
const getAddCommentFormError = (state: StateSchema) => state.addCommentForm?.error;
export { getAddCommentFormText, getAddCommentFormError };
