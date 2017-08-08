import React, { Component } from 'react'
import _ from 'lodash';
import { Sparklines, SparklinesLine ,SparklinesReferenceLine } from 'react-sparklines';

//why wrap in <div> ??

function average(data){
    return _.round(_.sum(data)/data.length);
}

class Chart extends Component {
    render() {
        return <div>
            <Sparklines height={120} width={180} data={this.props.data} >
                <SparklinesLine color={this.props.color} />
                <SparklinesReferenceLine type="avg" />
            </Sparklines>
            <div>{ average(this.props.data) } {this.props.units} </div>
        </div>;
    }

    
}

//  export default (props) => {
//     console.log(props);
//     return
//         <div> 
//                 <Sparklines height={120}  width={180} data={props.data} >
//                     <SparklinesLine color={props.color} />
//                 </Sparklines>    
//         </div> 
//     ; 
// }

export default Chart