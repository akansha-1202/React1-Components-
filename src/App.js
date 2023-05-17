import React, { Component } from 'react'
import FunctionalCompo from './Components/FunctionalCompo';
import ClassCompo from './Components/ClassCompo';
import "./App.css"

class App extends Component {
  constructor(){
    super();
      this.state={
        functionClick:false,
        classClick:false
      }
  }
  render() {
    return (
      <div className='App'>
            <h1 className='heading'>Styling using Functional and Class Component</h1>
          
          <div className='flex1'>
            <button onClick={()=>this.setState({functionClick: !this.state.functionClick})}>To see styling Functional component</button>
            <button onClick={()=>this.setState({classClick: !this.state.classClick})}>To see styling Class component</button>
          </div>

          {/* by default components have true value*/}
          <div className='flex2'>
             {this.state.functionClick && <FunctionalCompo/>} 
             {this.state.classClick && <ClassCompo/>}
          </div>
      </div>
    )
  }
}

export default App