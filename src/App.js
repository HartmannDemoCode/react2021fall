import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css'; //Use for all components in the smaller branches of the DOM
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useLocation,
  NavLink
} from "react-router-dom";
import BookTiles from './components/BookTiles';
import Home from './components/Home';
import AccordionDemo from './components/Accordion';
import PaginationDemo from './components/PaginationDemo';
import ControlsDemo from './components/ControlsDemo';

const Header = () => <ul className="header">
  <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
  <li><NavLink activeClassName="active" to="/booktiles">Book Tiles</NavLink></li>
  <li><NavLink activeClassName="active" to="/accordion">Accordion</NavLink></li>
  <li><NavLink activeClassName="active" to="/pagination">Pagination</NavLink></li>
  <li><NavLink activeClassName="active" to="/controls">Controls</NavLink></li>
</ul>;

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code> {location.pathname} </code>
      </h3>
    </div>
  );
}

function App(props) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home msg="Home" />
        </Route>
        <Route path="/booktiles">
          <BookTiles />
        </Route>
        <Route path="/accordion">
          <AccordionDemo />
        </Route>
        <Route path="/pagination">
          <PaginationDemo />
        </Route>
        <Route path="/controls">
          <ControlsDemo />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
