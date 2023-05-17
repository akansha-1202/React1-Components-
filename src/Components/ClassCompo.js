import React, { Component } from 'react'

class ClassCompo extends Component {
  render() {
    return (
        <div className='box box2'>
        <h1>This is created using Class Component.</h1>
        <h4>This is done using external CSS.</h4>
        <h4 style={{color:'darkblue'}}>This is done using inline CSS.</h4>
    </div>   
     )
  }
}

export default ClassCompo