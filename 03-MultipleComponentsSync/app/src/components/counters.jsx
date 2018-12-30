import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    
    render() { 
        let counters = this.props.counters;
       
        return ( 
          <div>
              {counters.map((counter)=>(
                  <Counter key={counter.id} id={counter.id} value={counter.value} onIncrement={()=> this.props.onIncrement(counter.id)}/>
              ))}
           </div>
         );
    }
}
 
export default Counters;