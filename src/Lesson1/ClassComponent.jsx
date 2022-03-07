import localDateOptions from './localDateOptions'
import React from 'react'

class ClassComponent extends React.Component{
  render(){
    return (
      <>
      <div className="container">
          <h2 className="greetingAndName">
            Привет, <span className="name">{this.props.name}</span>      
          </h2>
          <p className="dateOfRegistration">
            Зарегистрирован {this.props.date.toLocaleString("ru",localDateOptions)}
          </p>
        </div>    
      </>);
  }
}


export default ClassComponent;
