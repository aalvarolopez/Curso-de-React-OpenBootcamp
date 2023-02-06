import logo from './logo.svg';
import './App.css';
import { Contact } from './models/contact.class';
import ContactComponent from './components/pure/contact';
import Ejemplo1 from './hooks/ejemplo1';
import Ejemplo2 from './hooks/ejemplo2';
import Ejemplo4 from './hooks/ejemplo4';
import MyComponentWithContext from './hooks/ejemplo3';

function App() {

  const defaultContact = new Contact("Álvaro", "Álvaro López", "alvaroalvaro1997@gmail.com", false)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Own component Greeting.jsx */}
        {/* <Greeting name="Álvaro"></Greeting> */}
        {/* Example functional component */}
        {/* <GreetingF name="Álvaro"></GreetingF> */}
        {/* List task component */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <ContactComponent contact={defaultContact}></ContactComponent> */}
        {/* hook use example */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MyComponentWithContext></MyComponentWithContext> */}
        <Ejemplo4 nombre="Álvaro">
          <h3>
            Content of props.children
          </h3>
        </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
