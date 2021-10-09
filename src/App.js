
import './css/styles.css';
import './css/bootstrap.css'

import NavBar from "./components/navbar/NavBar";
import Home from './components/Home';
import CreateAccount from './components/CreateAccount';

import { UserContext } from './context';
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
    <NavBar/>
    <Router>  
      <UserContext.Provider value={{users:[{name:'Abel',email:'abel@mit.edu',password:'secret',balance:100, isLogged:'true'}]}}> 
        <div className="container" style={{padding: "20px"}}>
          
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
        </div>
        </UserContext.Provider>
    </Router>
    </>
  );
}

export default App;
