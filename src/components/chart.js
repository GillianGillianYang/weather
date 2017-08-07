import React from 'react'
import _ from 'lodash';
import { Sparklines, SparklinesLine ,SparkLinesReferenceLine} from 'react-sparklines';


//why wrap in <div> ??

function average(data){
    return _.round(_.sum(data)/data.length);
}

export default (props) => {
   // console.log(props.data);
    return
    (
            <div>
                <Sparklines height={120}  width={180} data={props.data} >
                    <SparklinesLine color={props.color} />
                    <SparkLinesReferenceLine type='avg'/>
                </Sparklines>    
        </div> 
        <div>
            {average(props.data) } {props.units}
        </div>
    ); 
}