import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

//{props.color}
//why wrap in <div> ??
export default (props) => {
   // console.log(props.data);
    return
    (
            <div>
                <Sparklines height={120}  width={180} data={props.data} >
                    <SparklinesLine color='red' />
                </Sparklines>    
            </div> 
    ); 
}