import "./App.css";
import SignupForm from "../src/pages/Signup/signup.jsx";
import LoginForm from "../src/pages/Login/login";
import LandingPage from "../src/pages/landing_page/landing_page";
import CustomerOrderScreen from "../src/pages/customer_order/CustomerOrdersScreen.jsx";

import { Route } from "react-router-dom";
import CustomerMain from "./pages/customer_main_screen/customer_main_screen";
function App() {
  return (
    <div className="App">
      <Route exact path="/signup" component={SignupForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route exact path="/" component={LandingPage}></Route>
      <Route path="/customer_main_screen" component={CustomerMain}></Route>
      <Route path="/customer_orders_screen" component={CustomerOrderScreen}></Route>

    </div>
  );
}

export default App;
