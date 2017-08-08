import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';
import _ from 'lodash'
import GoogleMap from '../components/google_map'

//export default 
class WeatherList extends Component{

    renderWeather(cityData){  //??? why not declare function 
        const name = cityData.city.name;
       //  const temps =  cityData.list.map(weather=> weather.main.temp);
   
        const temps =  _.map(cityData.list.map(weather=> weather.main.temp),(temp) => temp - 273 );
        const pressures =   cityData.list.map(weather=> weather.main.pressure);
        const humidities =   cityData.list.map(weather=> weather.main.humidity);
        const {lon ,lat} =cityData.city.coord; //distructuring
        // ??? why data={} obj; color = string
      
       // console.log(Chart);
    return(
        <tr key={name}>
            <td> <GoogleMap lon={lon} lat={lat}/> </td> 
             <td><Chart data={temps} color='orange' units="C"/> </td>
             <td><Chart data={pressures} color='red'units="hPa"/> </td>
             <td><Chart data={humidities} color='blue'units="%" /> </td>
        </tr>    
    );
    }

    // constructor ?? 
    render(){
        return(
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature (C)</th>
                        <th>Pressure (hPa)</th>
                        <th>Humidity (%)</th>
                    </tr>   
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>    
            </table> 
        );
    };
}

// function mapStateToProps(state){
//     return  {weather: state.weather}; 
//     // state.weather => reducers/index.js  key-value  {weather: WeatherReducer}
// }

//ES6
//const weather = state.weather
function mapStateToProps({weather} ){
   // return {weather:weather};
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);