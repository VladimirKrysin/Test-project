import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../../types/profile';

const fetchProfileData = createAsyncThunk<Profile, string, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (profileId, thunkAPI) => {
    try {
      const response = await thunkAPI.extra.api.get<Profile>(`/profile/${profileId}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue('error');
    }
  },
);

export { fetchProfileData };
