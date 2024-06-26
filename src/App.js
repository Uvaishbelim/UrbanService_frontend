// // import logo from './logo.svg';
// import './App.css';
// import ServiceList from './components/serviceprovider/ServiceList';
// import ServiceProviderDashboard from './components/serviceprovider/ServiceProviderDashboard';
// import AddService from './components/serviceprovider/AddService';
// import { Route, Routes } from 'react-router-dom';
// import SideBar from './components/SideBar';
// import Sign_in from './components/pages/Sign_in';
// import BookService from './components/user/BookService';
// import MyBookings from './components/user/MyBookings';
// import { ProtectedRoutes } from './hooks/ProtectedRoutes';
// import PaymentBooking from './components/user/PaymentBooking';
// import UserDashboard from './components/user/UserDashboard';
// import DetailBookService from './components/user/DetailBookService';
// import RegistrationForm from './components/pages/RegistrationForm';
// import DetailService from './components/serviceprovider/DetailService';
// import UpdateService from './components/serviceprovider/UpdateService';
// import Profile from './components/pages/Profile';
// import UserProfile from './components/user/UserProfile';
// import ForgotPassword from './components/pages/ForgotPassword';
// import ResetPassword from './components/pages/RestPassword';

// function App() {
//   const path = window.location.pathname;
//   console.log(path)

//   return (
//     <body className="g-sidenav-show bg-gray-100">

//       {path === "/" ||

//         path === "/sign-in" ||

//         path === "" ||

//         path === "/register" ||

//         path === "/serviceprovider/sign-in" ||

//         path === "/user/sign-in"

//         ? null : <aside
//           className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
//           id="sidenav-main"
//         >
//           {path === "/" ||

//             path === "/sign-in" ||

//             path === "" ||

//             path === "/serviceprovider/sign-in" ||

//             path === "/user/sign-in"

//             ? null :
//             < SideBar />}
//         </aside>
//       }

//       <main className="main-content border-radius-lg ps" >
//         <div>
//           <Routes >

//             <Route path="/" element={<Sign_in></Sign_in>}></Route>
//             <Route path='/register' element={<RegistrationForm />}></Route>
//             <Route element={<ProtectedRoutes />}>
//               <Route path="/serviceprovider/dashboard" element={<ServiceProviderDashboard />}></Route>
//               <Route path="/serviceprovider/addservice" element={<AddService />}></Route>
//               <Route path="/serviceprovider/details/:id" element={<DetailService />}></Route>
//               <Route path="/serviceprovider/update/:id" element={<UpdateService />}></Route>
//               <Route path="/serviceprovider/servicelist" element={<ServiceList />}></Route>
//               <Route path="/serviceprovider/profile" element={<Profile />}></Route>
//               <Route path="/user/bookservice" element={<BookService />}></Route>
//               <Route path="/user/mybookings" element={<MyBookings />}></Route>
//               <Route path="/user/detailservice/:id" element={<DetailBookService />}></Route>
//               <Route path="/user/paymentbooking/:id" element={<PaymentBooking/>}></Route>
//               {/* <Route path="user/paymentbooking/:id" element={<PaymentBooking /> }</Route> */}
//               <Route path="/user/dashboard" element={<UserDashboard />}></Route>
//               <Route path="/user/profile" element={<UserProfile />}></Route>
//             </Route>
//               <Route path="/src/components/pages/ForgotPassword.jsx" element={ForgotPassword}></Route>
//               <Route path="/src/components/pages/RestPassword.jsx" element={ResetPassword}></Route>

//           </Routes>
//         </div>
//       </main>
//     </body>
//   );
// }

// export default App;

// import logo from './logo.svg';
import "./App.css";
import ServiceList from "./components/serviceprovider/ServiceList";
import ServiceProviderDashboard from "./components/serviceprovider/ServiceProviderDashboard";
import AddService from "./components/serviceprovider/AddService";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/SideBar";
import Sign_in from "./components/pages/Sign_in";
import BookService from "./components/user/BookService";
import MyBookings from "./components/user/MyBookings";
import { ProtectedRoutes } from "./hooks/ProtectedRoutes";
import PaymentBooking from "./components/user/PaymentBooking";
import UserDashboard from "./components/user/UserDashboard";
import DetailBookService from "./components/user/DetailBookService";
import RegistrationForm from "./components/pages/RegistrationForm";
import DetailService from "./components/serviceprovider/DetailService";
import UpdateService from "./components/serviceprovider/UpdateService";
import Profile from "./components/pages/Profile";
import UserProfile from "./components/user/UserProfile";
import ForgotPassword from "./components/pages/ForgotPassword";
import ResetPassword from "./components/pages/RestPassword";
import AboutUs from "./components/pages/AboutUs";
import { Error404 } from "./components/pages/Error";

function App() {
  const path = window.location.pathname;
  console.log(path);

  return (
    <body className="g-sidenav-show bg-gray-100">
      {path === "/" ||
      path === "/sign-in" ||
      path === "" ||
      path === "/register" ||
      path === "/serviceprovider/sign-in" ||
      path === "/user/sign-in" ||
      path === "/about" ? null : (
        <aside
          className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
          id="sidenav-main">
          {path === "/" ||
          path === "/sign-in" ||
          path === "" ||
          path === "/serviceprovider/sign-in" ||
          path === "/user/sign-in" ? null : (
            <SideBar />
          )}
        </aside>
      )}

      <main className="main-content border-radius-lg ps">
        <div>
          <Routes>
            <Route path="/sign_in" element={<Sign_in></Sign_in>}></Route>
            <Route path="/" element={<AboutUs />}></Route>
            <Route
              path="/forgotpwd"
              element={<ForgotPassword></ForgotPassword>}></Route>
            <Route
              path="/resetpwd"
              element={<ResetPassword></ResetPassword>}></Route>
            {/* <Route path="/About" element={<AboutUs />}></Route> */}
            <Route path="*" element={<Error404 />}></Route>

            <Route path="/register" element={<RegistrationForm />}></Route>
            <Route element={<ProtectedRoutes />}>
              <Route
                path="/serviceprovider/dashboard"
                element={<ServiceProviderDashboard />}></Route>
              <Route
                path="/serviceprovider/addservice"
                element={<AddService />}></Route>
              <Route
                path="/serviceprovider/details/:id"
                element={<DetailService />}></Route>
              <Route
                path="/serviceprovider/update/:id"
                element={<UpdateService />}></Route>
              <Route
                path="/serviceprovider/servicelist"
                element={<ServiceList />}></Route>
              <Route
                path="/serviceprovider/profile"
                element={<Profile />}></Route>
              <Route path="/user/bookservice" element={<BookService />}></Route>
              <Route path="/user/mybookings" element={<MyBookings />}></Route>
              <Route
                path="/user/detailservice/:id"
                element={<DetailBookService />}></Route>
              <Route
                path="user/paymentbooking/:id"
                element={<PaymentBooking />}></Route>
              <Route path="/user/dashboard" element={<UserDashboard />}></Route>
              <Route path="/user/profile" element={<UserProfile />}></Route>
              {/* <Route path='*' element={<Error404/>} */}
              {/* <Route path="*" element={<Error404 />}></Route> */}

              {/* <Route path="/About" element={<AboutUs/>}></Route> */}

              {/* < Route path="/Addressupdate/:id" element={Update} */}
            </Route>
          </Routes>
        </div>
      </main>
    </body>
  );
}

export default App;
