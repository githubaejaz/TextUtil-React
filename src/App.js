import './App.css';
import {useState} from 'react'
import Navbar from './Components/Navbar/Navbar';
import About from './Components/Content/About';
import TextForm from './Components/Content/TextForm';

// import {
//   createBrowserRouter,
//   RouterProvider,
//   Routers,
//   Link,
//   Router
// } from "react-router-dom";

import {
  Navigate,
  Route,
  Routes
} from "react-router-dom";
import PageNotFound from './Components/PageNotFound';
import Dynamic from './Components/Dynamic';
import Login from './Components/Authentication/Login';
import UserProfile from './Components/Authentication/UserProfile';
import LoopData from './Components/LoopData';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <TextForm title="Enter text for activity"></TextForm> ,
//   },
//   {
//     path: "/about",
//     element: <About></About>,
//   },
//   {
//     path: "/navfile",
//     element: <NavFile></NavFile>,
//   },
//   {
//     path: "/contfile",
//     element: <ContFile></ContFile>
//   }
// ]);

function App() {

  const [LoggedInUserName, setLoggedInUserName] = useState("");
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
    <Navbar title="TextUtil"></Navbar>
    <div className="container">
      {/* <RouterProvider router={router} /> */}
      <Routes>
        <Route path="/" element={<TextForm title="Enter text for activity"></TextForm>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        {/* <Route path="*" element={<>Page Not Found</>}></Route> this will show only in content part */}
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        <Route path="/Dynamic/:UserName/Id" element={<Dynamic></Dynamic>}></Route>
        <Route path="/Login" element={<Login setUserName={setLoggedInUserName} setLoggedIn={setIsLoggedIn}></Login>}></Route>
        {/* <Route path="/userprofile" 
            element={<UserProfile settedUserName={LoggedInUserName} settedIsLoggedIn={IsLoggedIn}>
            </UserProfile>}>
        </Route> */}
        <Route path="/userprofile" 
            element=
            {
              IsLoggedIn ? <UserProfile settedUserName={LoggedInUserName}></UserProfile>
              : <Navigate replace to="/Login"/>
            }>
        </Route>
        <Route element={<LoopData></LoopData>} path='/loopdata'>Loop (Map)</Route>
      </Routes>
    </div>
   </>
  );
}

export default App;
