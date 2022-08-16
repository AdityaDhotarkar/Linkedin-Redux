import React, {useEffect} from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { login, selectUser, logout } from "./features/userSlice";
import SideBar from "./SideBar";
import Feed from "./Feed";
import { useDispatch } from "react-redux/es/exports";
import "./App.css";
import Login from "./Login";
import { auth } from "./fb";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth)
      {
        // User is logged in
        dispatch(login({
          email: userAuth.email,
          uid : userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL,
        }))
      }
      else
      {
        // User is logged out
        dispatch(logout());
      }
    })
  },[])

  return (
    <div className="app">
      {/* header */}
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          {/* SideBar */}
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}

      {/* App Body */}
    </div>
  );
}

export default App;
