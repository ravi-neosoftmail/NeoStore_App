import createSagaMiddleware from '@redux-saga/core';
import {applyMiddleware, createStore} from 'redux';
import rootReducer from '../reducer/rootReducer';
import rootSaga from '../saga';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';


/**
 *
 * @param {*} param0 
 * @description This is store file which is a state container which holds the application's state.
 * @author Ravi Ranjan
 * @returns all the state to the application.
 */



const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
