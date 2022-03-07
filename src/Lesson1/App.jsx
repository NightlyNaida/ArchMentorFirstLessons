import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import './index.css'

function App() {
  return( 
  <>
    <FunctionalComponent name="Сергей" date={new Date(2014,0,31)}></FunctionalComponent>
    <ClassComponent name="Петр" date={new Date(2011,9,23)}></ClassComponent>
  </>
  )
}

export default App;
