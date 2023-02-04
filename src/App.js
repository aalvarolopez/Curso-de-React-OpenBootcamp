import logo from './logo.svg';
import './App.css';
import { Contact } from './models/contact.class';
import ContactComponent from './components/pure/contact';

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
        <ContactComponent contact={defaultContact}></ContactComponent>
      </header>
    </div>
  );
}

export default App;
