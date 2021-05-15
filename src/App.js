import "./App.css";
import SignupForm from "../src/pages/Signup/signup.jsx";
import LoginForm from "../src/pages/Login/login";
// import LandingPage from "../src/pages/landing_page/landing_page";
import CustomerOrderScreen from "../src/pages/customer_order/CustomerOrdersScreen.jsx";

import { Route } from "react-router-dom";
import CustomerMain from "./pages/customer_main_screen/customer_main_screen";
import CustomerServiceMainPage from "./pages/customer_service_main_page/customer_service_main_page";
<<<<<<< HEAD
import Test from "./pages/test/test";
=======
import CustomerServiceProviderPage from "./pages/customer_service_provider_page/customer_service_provider_page";
>>>>>>> edd3ee0534ea51efd1c5aceccff891fc3de3bec0
function App() {
  return (
    <div className="App">
      <Route exact path="/signup" component={SignupForm}></Route>
      <Route path="/login" component={LoginForm}></Route>
      <Route exact path="/" component={CustomerServiceProviderPage}></Route>
      <Route path="/customer_main_screen" component={CustomerMain}></Route>
      <Route
        path="/customer_orders_screen"
        component={CustomerOrderScreen}
      ></Route>
      <Route exact path="/test" component={Test}></Route>
    </div>
  );
}

export default App;
