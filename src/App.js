import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Services from "./Components/Services/Services";
import About from "./Components/About/About";
import SignIn from "./Components/SignIn/SignIn";
import Register from "./Components/Register/Register";
import AuthProvider from "./Context/AuthProvider";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import MyOrder from "./Components/MyOrder/MyOrder";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import ManageOrder from "./Components/ManageOrder/ManageOrder";
import Details from "./Components/Details/Details";
import AddService from "./Components/AddService/AddService";
import UpdateStatus from "./Components/UpdateStatus/UpdateStatus";
import NotFound from "./Components/404/NotFound";

function App() {
    return (
        <div className="App">
            <AuthProvider>
                <Router>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route exact path="/home">
                            <Home></Home>
                        </Route>
                        <Route path="/service">
                            <Services></Services>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/signin">
                            <SignIn></SignIn>
                        </Route>
                        <Route path="/register">
                            <Register></Register>
                        </Route>
                        <PrivateRoute path="/placeorder/:placeId">
                            <PlaceOrder></PlaceOrder>
                        </PrivateRoute>

                        <Route path="/manageorder">
                            <ManageOrder></ManageOrder>
                        </Route>
                        <Route path="/addservice">
                            <AddService></AddService>
                        </Route>
                        <Route path="/myorder">
                            <MyOrder></MyOrder>
                        </Route>

                        <Route path="/update/:updateId">
                            <UpdateStatus></UpdateStatus>
                        </Route>

                        <Route path="/details/:detailsId">
                            <Details></Details>
                        </Route>
                        <Route path="*">
                            <NotFound></NotFound>
                        </Route>
                    </Switch>
                </Router>
            </AuthProvider>
        </div>
    );
}

export default App;
