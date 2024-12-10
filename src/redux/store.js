// src/store/index.js

import thunk from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import settingReducer from './siteSettingSlice';

const store = configureStore({
    reducer: {
        siteSetting: settingReducer,
        
    },
});

export default store;
