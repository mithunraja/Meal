import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  siteSetting: null,
};

const siteSettingSlice = createSlice({
  name: 'sitesettingdata',
  initialState,
  reducers: {
    SET_SITE_SETTING: (state, action) => {
      state.siteSetting = action.payload;
    },
  },
});

export const { SET_SITE_SETTING } = siteSettingSlice.actions;
export default siteSettingSlice.reducer;
