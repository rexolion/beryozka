import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import Reducer from '../Reducer/reducer';

const Store = createStore(Reducer, composeWithDevTools());

export default Store;