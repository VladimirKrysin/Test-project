import { AddCommentFormSchema } from '../types/addCommentForm';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AddCommentFormSchema = {
  text: '',
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  //   extraReducers: (builder) => {
  //     builder
  //       .addCase(loginByUsername.pending, (state, action) => {
  //         state.error = undefined;
  //         state.isLoading = true;
  //       })
  //       .addCase(loginByUsername.fulfilled, (state, action) => {
  //         state.isLoading = false;
  //       })
  //       .addCase(loginByUsername.rejected, (state, action) => {
  //         state.isLoading = false;
  //         state.error = action.payload;
  //       });
  //   },
});

export const { actions: addCommentFormActions } = addCommentFormSlice;
export const { reducer: addCommentFormReducer } = addCommentFormSlice;
