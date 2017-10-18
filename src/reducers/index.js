import {combinedReducers} from 'redux';
import WeatherReducer from './reducer_weather';


const rootReducer = combinedReducers({
    state: (state = {}) => state
});

export default rootReducer;