import React, { Component } from 'react';
import Ninja from './Ninjas';
import AddNinja from './AddNinja';

class App extends Component {

  state = {
    ninjas:[
      { name: 'Saurabh', age: '24', belt: 'black', id:1 },
      { name: 'Virat', age: '30', belt: 'blue', id:2 },
      { name: 'Rohit', age: '32', belt: 'green', id:3 }
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    
    this.setState({
      ninjas: ninjas
    })
  }

  deleteNinja = (id) => {
    //console.log(id);
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !==id;
    })

    this.setState({
      ninjas: ninjas
    })
  }

  componentDidMount() {
    console.log('Component is Mounted!')
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('Component is Updated!');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>This is my react app</h1>
        <p>Welcome :)</p>
        
        <Ninja deleteNinja = {this.deleteNinja} ninjas = {this.state.ninjas}/>
        <AddNinja addNinja = {this.addNinja} />
      </div>
    );
  }
}

export default App;
