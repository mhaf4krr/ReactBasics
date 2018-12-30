import React, { Component } from 'react';
import Counter from './counter'
class Counters extends Component {
    state = { 
        counters : [{id:1,value:5} , {id:2,value:6} , {id:3,value:10}]
     }

     handleIncrement = (id) =>{
        let counters = [...this.state.counters];
        counters[id-1].value += 1;
        this.setState({counters})
     }

     handleDecrement = (id) =>{
        let counters = [...this.state.counters];
        counters[id-1].value -= 1;
        this.setState({counters})
     }
     
    render() { 
        return (  
            <React.Fragment>
                {this.state.counters.map(counter => (

                    <div className="row">
                        <Counter key={counter.id} value={counter.value} onIncrement={()=> this.handleIncrement(counter.id)} onDecrement={()=>this.handleDecrement(counter.id)}/>
                    </div>
                ))}
            </React.Fragment>
        );
    }
}
 
export default Counters;