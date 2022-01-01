import React, { createContext, useEffect, useReducer } from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import AdminPanel from "./components/AdminPanel/AdminPanel";
import NotFound from "./components/NotFound/NotFound";
import TravelGroupList from "./components/TravelGroupList/TravelGroupList";
import Destination from "./components/Destination/Destination";
import DestinationList from "./components/DestinationList/DestinationList";
import Navbar from "./components/Shared/Navbar";
import Footer from "./components/Shared/Footer";
import Bookmark from "./components/Bookmark/Bookmark";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { groupListInitial, groupListReducer } from "./utilities/GroupListReducer";
import { loggedInUserInitial, loggedInUserReducer } from "./utilities/LoggedInUserReducer";
import { destinationListInitial, destinationListReducer } from "./utilities/DestinationListReducer";

export const UserContext = createContext();

function App() {
  const [ destinationList, destinationListDispatch ] = useReducer(destinationListReducer, destinationListInitial);
  const [ groupList, groupListDispatch ] = useReducer(groupListReducer, groupListInitial);
  const [ loggedInUser, loggedInUserDispatch ] = useReducer(loggedInUserReducer, loggedInUserInitial);
  

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo") || "{}";
    const data = JSON.parse(userInfo);
    loggedInUserDispatch({ type: 'SET_USER', userInfo: data });
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/groupList')
    .then(res => res.json())
    .then(data => {
      groupListDispatch({ type: 'LOAD_GROUPS', groupList: data });
    })
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/destinationList')
    .then(res => res.json())
    .then(data => destinationListDispatch({ type: 'LOAD_DESTINATIONS', destinations: data }))
  }, []);

  return (
    <UserContext.Provider value={{ loggedInUser, loggedInUserDispatch, groupList, groupListDispatch, destinationList, destinationListDispatch }}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <PrivateRoute path="/admin">
            <AdminPanel />
          </PrivateRoute>

          <Route path="/travelGroupList">
            <TravelGroupList />
          </Route>

          <PrivateRoute path="/bookmarks">
            <Bookmark />
          </PrivateRoute>

          <Route path="/destinationList">
            <DestinationList />
          </Route>

          <Route path="/destination/:destinationId">
            <Destination />
          </Route>
          
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
