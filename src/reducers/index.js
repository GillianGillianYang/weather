import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';


//const rootReducer = combineReducers({ state: (state = {}) => state});

//state_  key:value
const rootReducer = combineReducers(
  {weather: WeatherReducer}
);

export default rootReducer;
