import React, { Component } from 'react';
class counter extends Component {
    
    checkCount = () =>{
        if(this.props.value > 0)
            return this.props.value
        else return "Zero"}

    DecrementBtnClass = () =>{
        if(this.props.value > 0)
        return "col-md-1 btn btn-danger active"
        else return "col-md-1 btn btn-danger disabled "
    }

    render() { 

        
        

        return ( 
            <React.Fragment>
                <span className="col-md-1 badge">{this.checkCount()}</span>
                <button className="col-md-1 btn btn-primary btn-sm active" onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement} className ={this.DecrementBtnClass()}>X</button>
            </React.Fragment>
         );
    }
}
 
export default counter;