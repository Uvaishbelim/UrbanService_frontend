import React from 'react'

export const UserDashboard = () => {
  return (
    <div>
      <div className="container-fluid py-4">
        <h6>
          If you are not redirected automatically, follow{" "}
          <a href=" https://demos.creative-tim.com/material-dashboard/pages/dashboard ">
            this link
          </a>
          .
        </h6>
        <div className="row">
          <div className="col-lg-7 position-relative z-index-2">
            <div className="card card-plain mb-4">
              <div className="card-body p-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="d-flex flex-column h-100">
                      <h2 className="font-weight-bolder mb-0">
                        General Statistics
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-sm-5">
                <div className="card  mb-2">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark shadow text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">weekend</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">Bookings</p>
                      <h4 className="mb-0">281</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        +55%{" "}
                      </span>
                      than last week
                    </p>
                  </div>
                </div>
                <div className="card  mb-2">
                  <div className="card-header p-3 pt-2">
                    <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary shadow text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">leaderboard</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize">
                        Today's Users
                      </p>
                      <h4 className="mb-0">2,300</h4>
                    </div>
                  </div>
                  <hr className="dark horizontal my-0" />
                  <div className="card-footer p-3">
                    <p className="mb-0">
                      <span className="text-success text-sm font-weight-bolder">
                        +3%{" "}
                      </span>
                      than last month
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-sm-5 mt-sm-0 mt-4">
                <div className="card  mb-2">
                  <div className="card-header p-3 pt-2 bg-transparent">
                    <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">store</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize ">Revenue</p>
                      <h4 className="mb-0 ">34k</h4>
                    </div>
                  </div>
                  <hr className="horizontal my-0 dark" />
                  <div className="card-footer p-3">
                    <p className="mb-0 ">
                      <span className="text-success text-sm font-weight-bolder">
                        +1%{" "}
                      </span>
                      than yesterday
                    </p>
                  </div>
                </div>
                <div className="card ">
                  <div className="card-header p-3 pt-2 bg-transparent">
                    <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                      <i className="material-icons opacity-10">person_add</i>
                    </div>
                    <div className="text-end pt-1">
                      <p className="text-sm mb-0 text-capitalize ">Followers</p>
                      <h4 className="mb-0 ">+91</h4>
                    </div>
                  </div>
                  <hr className="horizontal my-0 dark" />
                  <div className="card-footer p-3">
                    <p className="mb-0 ">Just updated</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-10">
                <div className="card mb-4 ">
                  <div className="d-flex">
                    <div className="icon icon-shape icon-lg bg-gradient-success shadow text-center border-radius-xl mt-n3 ms-4">
                      <i
                        className="material-icons opacity-10"
                        aria-hidden="true"
                      >
                        language
                      </i>
                    </div>
                    <h6 className="mt-3 mb-2 ms-3 ">Sales by Country</h6>
                  </div>
                  <div className="card-body p-3">
                    <div className="row">
                      <div className="col-lg-6 col-md-7">
                        <div className="table-responsive">
                          <table className="table align-items-center ">
                            <tbody>
                              <tr>
                                <td className="w-30">
                                  <div className="d-flex px-2 py-1 align-items-center">
                                    <div>
                                      <img
                                        src="./assets/img/icons/flags/US.png"
                                        alt="Country flag"
                                      />
                                    </div>
                                    <div className="ms-4">
                                      <p className="text-xs font-weight-bold mb-0 ">
                                        Country:
                                      </p>
                                      <h6 className="text-sm font-weight-normal mb-0 ">
                                        United States
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Sales:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      2500
                                    </h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Value:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      $230,900
                                    </h6>
                                  </div>
                                </td>
                                <td className="align-middle text-sm">
                                  <div className="col text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Bounce:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      29.9%
                                    </h6>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="w-30">
                                  <div className="d-flex px-2 py-1 align-items-center">
                                    <div>
                                      <img
                                        src="./assets/img/icons/flags/DE.png"
                                        alt="Country flag"
                                      />
                                    </div>
                                    <div className="ms-4">
                                      <p className="text-xs font-weight-bold mb-0 ">
                                        Country:
                                      </p>
                                      <h6 className="text-sm font-weight-normal mb-0 ">
                                        Germany
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Sales:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      3.900
                                    </h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Value:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      $440,000
                                    </h6>
                                  </div>
                                </td>
                                <td className="align-middle text-sm">
                                  <div className="col text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Bounce:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      40.22%
                                    </h6>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="w-30">
                                  <div className="d-flex px-2 py-1 align-items-center">
                                    <div>
                                      <img
                                        src="./assets/img/icons/flags/GB.png"
                                        alt="Country flag"
                                      />
                                    </div>
                                    <div className="ms-4">
                                      <p className="text-xs font-weight-bold mb-0 ">
                                        Country:
                                      </p>
                                      <h6 className="text-sm font-weight-normal mb-0 ">
                                        Great Britain
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Sales:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      1.400
                                    </h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Value:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      $190,700
                                    </h6>
                                  </div>
                                </td>
                                <td className="align-middle text-sm">
                                  <div className="col text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Bounce:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      23.44%
                                    </h6>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td className="w-30">
                                  <div className="d-flex px-2 py-1 align-items-center">
                                    <div>
                                      <img
                                        src="./assets/img/icons/flags/BR.png"
                                        alt="Country flag"
                                      />
                                    </div>
                                    <div className="ms-4">
                                      <p className="text-xs font-weight-bold mb-0 ">
                                        Country:
                                      </p>
                                      <h6 className="text-sm font-weight-normal mb-0 ">
                                        Brasil
                                      </h6>
                                    </div>
                                  </div>
                                </td>
                                <td>
                                  <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Sales:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      562
                                    </h6>
                                  </div>
                                </td>
                                <td>
                                  <div className="text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Value:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      $143,960
                                    </h6>
                                  </div>
                                </td>
                                <td className="align-middle text-sm">
                                  <div className="col text-center">
                                    <p className="text-xs font-weight-bold mb-0 ">
                                      Bounce:
                                    </p>
                                    <h6 className="text-sm font-weight-normal mb-0 ">
                                      32.14%
                                    </h6>
                                  </div>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-5">
                        <div id="map" className="mt-0 mt-lg-n4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-lg-5 mb-lg-0 mb-4">
            <div className="card z-index-2 mt-4">
              <div className="card-body mt-n5 px-3">
                <div className="bg-gradient-dark shadow-dark border-radius-lg py-3 pe-1 mb-3">
                  <div className="chart">
                    <canvas
                      id="chart-bars"
                      className="chart-canvas"
                      height={170}
                    />
                  </div>
                </div>
                <h6 className="ms-2 mt-4 mb-0"> Active Users </h6>
                <p className="text-sm ms-2">
                  {" "}
                  (<span className="font-weight-bolder">+11%</span>) than last
                  week{" "}
                </p>
                <div className="container border-radius-lg">
                  <div className="row">
                    <div className="col-3 py-3 ps-0">
                      <div className="d-flex mb-2">
                        <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">groups</i>
                        </div>
                        <p className="text-xs my-auto font-weight-bold">
                          Users
                        </p>
                      </div>
                      <h4 className="font-weight-bolder">42K</h4>
                      <div className="progress w-75">
                        <div
                          className="progress-bar bg-dark w-60"
                          role="progressbar"
                          aria-valuenow={60}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-3 py-3 ps-0">
                      <div className="d-flex mb-2">
                        <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">ads_click</i>
                        </div>
                        <p className="text-xs mt-1 mb-0 font-weight-bold">
                          Clicks
                        </p>
                      </div>
                      <h4 className="font-weight-bolder">1.7m</h4>
                      <div className="progress w-75">
                        <div
                          className="progress-bar bg-dark w-90"
                          role="progressbar"
                          aria-valuenow={90}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-3 py-3 ps-0">
                      <div className="d-flex mb-2">
                        <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">receipt</i>
                        </div>
                        <p className="text-xs mt-1 mb-0 font-weight-bold">
                          Sales
                        </p>
                      </div>
                      <h4 className="font-weight-bolder">399$</h4>
                      <div className="progress w-75">
                        <div
                          className="progress-bar bg-dark w-30"
                          role="progressbar"
                          aria-valuenow={30}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                    <div className="col-3 py-3 ps-0">
                      <div className="d-flex mb-2">
                        <div className="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center">
                          <i className="material-icons opacity-10">category</i>
                        </div>
                        <p className="text-xs mt-1 mb-0 font-weight-bold">
                          Items
                        </p>
                      </div>
                      <h4 className="font-weight-bolder">74</h4>
                      <div className="progress w-75">
                        <div
                          className="progress-bar bg-dark w-50"
                          role="progressbar"
                          aria-valuenow={50}
                          aria-valuemin={0}
                          aria-valuemax={100}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="card z-index-2">
              <div className="card-header pb-0">
                <h6>Sales overview</h6>
                <p className="text-sm">
                  <i
                    className="fa fa-arrow-up text-success"
                    aria-hidden="true"
                  />
                  <span className="font-weight-bold">4% more</span> in 2021
                </p>
              </div>
              <div className="card-body p-3">
                <div className="chart">
                  <canvas
                    id="chart-line"
                    className="chart-canvas"
                    height={300}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div
              id="globe"
              className="position-absolute end-0 top-10 mt-sm-3 mt-7 me-lg-7"
            >
              <canvas
                width={700}
                height={600}
                className="w-lg-100 h-lg-100 w-75 h-75 me-lg-0 me-n10 mt-lg-5"
              />
            </div>
          </div>
        </div>
        <footer className="footer py-4  ">
          <div className="container-fluid">
            <div className="row align-items-center justify-content-lg-between">
              <div className="col-lg-6 mb-lg-0 mb-4">
                <div className="copyright text-center text-sm text-muted text-lg-start">
                  © 2024, made with{" "}
                  <i className="fa fa-heart" aria-hidden="true" /> by
                  <a
                    href="https://www.creative-tim.com"
                    className="font-weight-bold"
                    target="_blank"
                  >
                    Creative Tim
                  </a>
                  for a better web.
                </div>
              </div>
              <div className="col-lg-6">
                <ul className="nav nav-footer justify-content-center justify-content-lg-end">
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com"
                      className="nav-link text-muted"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com/presentation"
                      className="nav-link text-muted"
                      target="_blank"
                    >
                      About Us
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com/blog"
                      className="nav-link text-muted"
                      target="_blank"
                    >
                      Blog
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      href="https://www.creative-tim.com/license"
                      className="nav-link pe-0 text-muted"
                      target="_blank"
                    >
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
