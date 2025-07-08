import { Article } from './article';

interface ArticleDetailsSchema {
  isLoading: boolean;
  error?: string;
  data?: Article;
}
export { ArticleDetailsSchema };
