import localDateOptions from './localDateOptions'


function FunctionalComponent(props) {
  console.log(props);
    return (
    <>
    <div className="container">
      <h2 className="greetingAndName">
        Привет, <span className="name">{props.name}</span>      
      </h2>
      <p className="dateOfRegistration">
        Зарегистрирован {props.date.toLocaleString("ru",localDateOptions)}
      </p>
    </div>    
    </>);
}

export default FunctionalComponent;
