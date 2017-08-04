import React, {Component} from 'react';
import {connect} from 'react-redux';

//export default 



class WeatherList extends Component{

    renderWeather(cityData){  //??? why not declare function 
        const name = cityData.city.name;
    return(
        <tr key={name}>
            <td>{name} </td>  
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
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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