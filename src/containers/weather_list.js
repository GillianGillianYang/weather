import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Sparklines, SparklinesLine} from 'react-sparklines';
import Chart from '../components/chart';

//export default 
class WeatherList extends Component{

    renderWeather(cityData){  //??? why not declare function 
        const name = cityData.city.name;
        const temps =  cityData.list.map(weather=> weather.main.temp);
        // ??? why data={} obj; color = string
        // <td><Chart data={temps} color='orange'/> </td>
    return(
        <tr key={name}>
            <td>{name} </td> 
            <td><Sparklines height={120}  width={180} data={temps}>
                    <SparklinesLine color='red' />
                </Sparklines>  
            </td>  
            <td>
                <Chart data={temps} color="orange" />
            </td>       
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