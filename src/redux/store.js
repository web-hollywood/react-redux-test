import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import startupMiddleware from './middlewares/startupMiddleware';
import github from './reducers/githubReducer';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const rootReducer = combineReducers({
  github,
});

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(
    applyMiddleware(
      startupMiddleware,
      thunk
    )
  )
);

export default store;
