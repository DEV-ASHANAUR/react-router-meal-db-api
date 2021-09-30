import './App.css';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Details from './components/Details/Details';
import NotFound from './components/Error/NotFound';
import Home from './components/Home/Home';
function App() {
  return (
    <div>
      <Router>
        <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path="/meals/:itemName?">
              <Meals></Meals>
            </Route>
            <Route path="/details/:idMeal">
              <Details></Details>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
