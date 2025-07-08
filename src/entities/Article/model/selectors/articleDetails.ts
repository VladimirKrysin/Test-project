import { StateSchema } from 'app/providers/StoreProvider';
import exp from 'constants';

const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data;
const getArticleDetailsError = (state: StateSchema) => state.articleDetails?.error;
const getArticleDetailsIsLoading = (state: StateSchema) => state.articleDetails?.isLoading;

export { getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading };
