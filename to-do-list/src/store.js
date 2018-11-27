import { createStore, applyMiddleware, compose } from 'redux';
import sagaMiddleWare from 'redux-saga';
import rootReducer from './redux/rootReducer';
import rootSagas from './redux/rootSaga';

const configureSagas = sagaMiddleWare();

const configureStore = (intialState) => {
     //return createStore(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
     const store = createStore(rootReducer,intialState,
          compose(applyMiddleware(configureSagas),
          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
     );   
     configureSagas.run(rootSagas);
     return store;
}
export default configureStore;