import React, {Component} from 'react';

export default class SearchBar extends Component{
    constructor(props){
        super(props)

        this.state = {term:''};
        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange(event){ // Event -> vanilla.js
        console.log(event.target.value);
       // console.log("search compoment :",this);this -> undefined //mystery context
        this.setState({term:event.target.value}); //"this" will not be this search component ; it will refer other . 
        
    }

    //onChange={this.onInputChange} //flat arrow function 
    //it is a  callbakc function // but the "this will be mystery context "

    render(){
        return(
           <form className='input-group'>
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