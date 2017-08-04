import { FETCH_WEATHER } from '../actions/index'

export default function(state=[] , action){
   //console.log('Action reacieved:',action);
   //state : [city,city,ctiy]

   switch(action.type)
   {     case FETCH_WEATHER:
         // return state.concat(action.payload.data); // return a new state , do not change the exist one;
         return [action.payload.data , ... state] ;
   }
     
    return state;
}