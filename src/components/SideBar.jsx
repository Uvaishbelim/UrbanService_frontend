import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const SideBar = () => {




    const path = window.location.pathname;
    const serviceProviderLinks = [


        {
            name: "DASHBOARD",
            link: "/serviceprovider/Dashboard",
        },
        {
            name: "ADD SERVICE",
            link: "/serviceprovider/addservice",

        },
        {
            name: "MY SERVICES",
            link: "/serviceprovider/servicelist",
        },,
        {
            name: "PROFILE",
            link: "/serviceprovider/profile"
        },
        



    ]

    const userLinks = [
        {
            name: "USER DASHBOARD",
            link: "/user/dashboard",
        },
        {
            name: "BOOK SERVICE",
            link: "/user/bookservice",
        },
        {
            name: "MY BOOKINGS",
            link: "/user/mybookings",
        },
        {
            name: "PROFILE",
            link: "/user/profile"
        }
        
        // {
        //     name:"payment Booking",
        //     link:"/user/paymentbooking"
        // }
    ];

    return (

<>
<Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
        />

        <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />

        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossorigin="anonymous"
        ></script>

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />

        <link
          id="pagestyle"
          href="../assets/css/material-dashboard.css?v=3.0.0"
          rel="stylesheet"
        />
      </Helmet>




        <div>

            {/* <main class="main-content border-radius-lg "> */}
            <aside
                class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark"
                id="sidenav-main" style={{ background: "black" }}>

                <div class="sidenav-header">
                    <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none"
                        aria-hidden="true" id="iconSidenav"></i>

                    <div class="navbar-brand m-0">
                        <img src="../assets/img/logo-ct.png" class="navbar-brand-img h-100" alt="main_logo" />
                        <span class="ms-1 font-weight-bold text-white">Urban Service </span>

                    </div>
                </div>


                <hr class="horizontal light mt-0 mb-2" />
{/*  This is for the list  */}
                <div class="collapse navbar-collapse  w-auto  " id="sidenav-collapse-main">
                    <ul class="navbar-nav">

                        {/* <li class="nav-item">
                                <Link className="nav-link text-white " to="/serviceprovider/dashboard">

                                    <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">dashboard</i>
                                </div>

                                    <span class="nav-link-text ms-1">Dashboard</span>
                                </Link>
                            </li> */}


                        {path.includes("serviceprovider")
                            ? serviceProviderLinks.map((serpro) => {
                                return (
                                    <li class="nav-item">
                                        <Link className="nav-link text-white " to={serpro.link}>

                                            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                                <i class="material-icons opacity-10">dashboard</i>
                                            </div>

                                            <span class="nav-link-text ms-1">{serpro.name}</span>

                                        </Link>
                                    </li>
                                )
                            })
                            : userLinks.map((user) => {

                                return (
                                    <li class="nav-item">
                                        <Link className="nav-link text-white " to={user.link}>

                                            <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                                <i class="material-icons opacity-10">dashboard</i>
                                            </div>

                                            <span class="nav-link-text ms-1">{user.name}</span>

                                        </Link>
                                    </li>
                                )

                            })
                        }
                        {/* <li class="nav-item">
                            <Link class="nav-link text-white active bg-gradient-primary" to="/serviceprovider/profile">
                                <div class="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i class="material-icons opacity-10">person</i>
                                </div>
                                <span class="nav-link-text ms-1">Profile</span>
                            </Link>
                        </li> */}
                    </ul>

                </div>


            </aside>
            {/* </main> */}
        </div>
        </>
    )
}

export default SideBar
