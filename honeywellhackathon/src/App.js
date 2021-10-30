import './App.css';
import Product from './Products/Product';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductDetail from './Products/ProductDetail';
import Header from './Header';

function App() {
  return (
    <div className="App">
    <Router>
     <Header />
    <Switch>
    <Route path="/" exact component={Product} />
    <Route path="/product/:productId" component={ProductDetail} />
    <Route>404 Not Found!</Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
