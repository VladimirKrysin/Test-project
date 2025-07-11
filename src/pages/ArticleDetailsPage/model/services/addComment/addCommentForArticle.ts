import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const userData = getUserAuthData(thunkAPI.getState());
    const article = getArticleDetailsData(thunkAPI.getState());

    if (!userData || !text || !article) {
      return thunkAPI.rejectWithValue('no data');
    }
    try {
      const response = await thunkAPI.extra.api.post<Comment>('/comments', {
        articleId: article.id,
        userId: userData.id,
        text,
      });
      if (!response.data) {
        throw new Error();
      }

      thunkAPI.dispatch(fetchCommentsByArticleId(article.id));

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  },
);

export { addCommentForArticle };
