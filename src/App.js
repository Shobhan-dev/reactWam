import Landing from './Screens/Landing';
import Login from './Screens/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
            <Route path='/' component={Landing} exact/>
            <Route path='/login' component={Login} />
    </Router>
    </div>
  );
}

export default App;
