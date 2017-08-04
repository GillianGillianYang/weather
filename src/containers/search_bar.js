import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';


//export default
 class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this); 
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){ // Event -> vanilla.js
        console.log(event.target.value);
       // console.log("search compoment :",this);this -> undefined //mystery context
        this.setState({term:event.target.value}); //"this" will not be this search component ; it will refer other . 
    }

    onFormSubmit(event){
        event.preventDefault();
        //we need to go and fetch weather data
        this.props.fetchWeather(this.state.term); // ?? why  this.props ??? 
        // error : Cannot read property 'props' of null -> bind this 
        this.setState({term:''});
    }

    //onChange={this.onInputChange} //flat arrow function 
    //it is a  callbakc function // but the "this will be mystery context "

    render(){
        return(
           <form onSubmit={this.onFormSubmit} className='input-group'>
               <input
                    placeholder='Get a 5-day forecast in your favorite city' 
                    className='form-control' 
                    value={this.state.term}
                    onChange={this.onInputChange}
                    />
               <span className='input-group-btn'>
                   <button type='submit' className="btn btn-secondary">Submit</button>
               </span>    
           </form>   
        );
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({fetchWeather}, dispatch); 
    // bind action creators(fetchWeather) with dispatch, make sure action will flows through middleware and reducers(in redux)
}

export default connect(null,mapDispatchToProps)(SearchBar); //!!!!!