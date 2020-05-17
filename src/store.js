import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './redux/reducers/';

const store = configureStore({
  reducer: reducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
