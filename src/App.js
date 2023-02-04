import logo from './logo.svg';
import './App.css';
import GreetingF from './components/pure/greetingF';
import TaskListComponent from './components/container/task_list';
import ContactListComponent from './components/container/contact_list';

function App() {
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
        <ContactListComponent></ContactListComponent>
      </header>
    </div>
  );
}

export default App;
