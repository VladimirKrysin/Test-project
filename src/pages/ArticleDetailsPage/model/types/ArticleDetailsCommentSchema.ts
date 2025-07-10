import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

interface ArticleDetailsCommentSchema extends EntityState<Comment> {
  isLoading: boolean;
  error?: string;
}

export { ArticleDetailsCommentSchema };
