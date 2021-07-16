import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import ThunkMiddleware  from 'redux-thunk';
import reducers from './reducers/reducers';

const bindMiddleware = (...middlewares) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middlewares));
  }

  return applyMiddleware(...middlewares);
};

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state,
      ...action.payload,
    };
    return nextState;
  } else {
    return reducers(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware(ThunkMiddleware));
};

export const wrapper = createWrapper(initStore);
