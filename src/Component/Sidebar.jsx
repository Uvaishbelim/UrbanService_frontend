import React from 'react'
import { Link } from 'react-router-dom';

export const Sidebar = () => {
    const path = window.location.pathname;
    const ServiceProviderLinks = [
      {
        name: "Service Provider Dashboard",
        link:"/serviceprovider/dashboard",
        icon: "table_view",
      },
      {
        name: "Add Service",
        link: "/serviceprovider/addservice",
        icon: "table_view",
      },
      {
        name: "My Service",
        link: "/serviceprovider/myservice",
        icon: "person",
      },
    ];
    const userLinks = [
      {
        name: "User Dashboard",
        link: "/user/dashboard",
        icon: "fa-solid fa-camera-movie",
      },
      {
        name: "Book Service",
        link: "/user/bookservice",
      },
      {
        name: "My Bookings",
        link: "/user/mybookings",
      },
    ];

  return (
      <aside
        class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
        id="sidenav-main"
      >
        <div class="sidenav-header">
          <i
            class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
            aria-hidden="true"
            id="iconSidenav"
          ></i>
          <a class="navbar-brand m-0" href="#" target="_blank">
            <img
              src="../assets/img/logo-ct.png"
              class="navbar-brand-img h-100"
              alt="main_logo"
            />
            <span class="ms-1 font-weight-bold text-white">Urban Service</span>
          </a>
        </div>
        <hr class="horizontal light mt-0 mb-2" />
        <div
          class="collapse navbar-collapse  w-auto "
          id="sidenav-collapse-main"
        >
          <ul class="navbar-nav">
            {path.includes("serviceprovider")
              ? ServiceProviderLinks.map((serpro) => {
                  return (
                    <li class="nav-item">
                      <Link className="nav-link text-white" to={serpro.link}>
                        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">
                            {serpro.icon}
                          </i>
                          <span class="nav-link-text ms-1">{serpro.name}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })
              : userLinks.map((user) => {
                  return (
                    <li class="nav-item">
                      <Link className="nav-link text-white" to={user.link}>
                        <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">person</i>
                          <span class="nav-link-text ms-1">{user.name}</span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
            <li class="nav-item">
              <a class="nav-link text-white " href="../pages/profile.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">person</i>
                </div>
                <span class="nav-link-text ms-1">Profile</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white " href="../pages/sign-in.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">login</i>
                </div>
                <span class="nav-link-text ms-1">Sign In</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white " href="../pages/sign-up.html">
                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                  <i class="material-icons opacity-10">assignment</i>
                </div>
                <span class="nav-link-text ms-1">Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
  );
}
