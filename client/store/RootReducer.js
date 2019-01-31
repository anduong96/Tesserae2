import { combineReducers } from 'redux';
import Immutables from './Immutables/reducer'
import Options from './Options/reducer'
import Canvas from './Canvas/reducer'

export default combineReducers({
	Immutables,
	Options,
	Canvas
});

