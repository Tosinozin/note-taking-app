import React, { Component } from 'react';
import Top from './components/top';
import Bottom from './components/bottom';

class App extends Component {
  // constructor(props){
  //   super(props);

    
  // }

  
  render() {
    return(
      <div className = "container" >
        <Top />
        <Bottom />
      </div>
    )
  }
}

export default App;
