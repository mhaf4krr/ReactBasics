import React, {
  Component
} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import NavBar from './components/navbar'
class App extends Component {

  state = {
    counters: [{
      id: 0,
      value: 10,
      key:0
    }, {
      id: 1,
      value: 30,
      key:1
    }]
  }

  handleIncrement = (id) =>{
    let counters = [...this.state.counters];
    counters[id] +=1;
    this.setState({counters});
  }


  render() {
    return ( 

      
      <div>
        <NavBar count = {this.state.counters.length} />
        <React.Fragment>
        <Counters counters={this.state.counters} onIncrement={this.handleIncrement}/>
        </React.Fragment>
      </div>
    );
  }
}

export default App;