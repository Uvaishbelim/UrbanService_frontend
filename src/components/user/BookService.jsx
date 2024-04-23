import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const BookService = () => {
  const navigate = useNavigate();

  const [services, setservices] = useState([]);
  // const id = useParams().id

  const changehandler = async (e) => {
    try {
      const res = await axios.get(
        "http://localhost:4000/services/filterservice",
        {
          params: {
            servicename: e.target.value,
          },
        }
      );
      console.log("res in searchHandler", res.data.data);
      setservices(res.data.data);
    } catch (error) {
      setservices([]);
    }
  };

  const submitHandler = async () => {
    try {
      const res = await axios.get("http://localhost:4000/services/services");
      // console.log(res);
      // console.log(res.data);
      // console.log(res.data.message);
      console.log(res.data.data);
      setservices(res.data.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    submitHandler();
  }, []);

  // const submitBooking = async()=>{

  //     const serviceProviderId = services?.serviceprovider?.useParams._id;
  //     const userId = localStorage.getItem("id");
  //     // const id1 = id;
  //     const total = services.fees;

  //     const objectToSubmit = {

  //         // service:id1,
  //         serviceprovider:serviceProviderId,
  //         user:userId,
  //         totalAmount : total,
  //     }
  //     try{

  //         const res = await axios.post("http://localhost:4000/bookings/booking",objectToSubmit)
  //         console.log(res.data)

  //         navigate("/user/paymentbooking")

  //     }catch(e){

  //         console.log(e)

  //     }

  // }

  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
        />

        <link href="../../assets/css/nucleo-icons.css" rel="stylesheet" />
        <link href="../../assets/css/nucleo-svg.css" rel="stylesheet" />

        <script
          src="https://kit.fontawesome.com/42d5adcbca.js"
          crossorigin="anonymous"></script>

        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
          rel="stylesheet"
        />

        <link
          id="pagestyle"
          href="../../assets/css/material-dashboard.css?v=3.0.0"
          rel="stylesheet"
        />
      </Helmet>

      <div className="col-12 mt-4">
        <div className="mb-5 ps-3">
          <h4 className="mb-1 font-weight-bolder">Services</h4>
          <p className="font-weight-bolder">
            You can book services shown below...
          </p>
        </div>
        <input
          type="text"
          placeholder="search for services..."
          className="mb-5 ps-3"
          onChange={(e) => {
            changehandler(e);
          }}
        />
        <div className="row">
          {services?.map((service) => {
            return (
              <div className="col-xl-3 col-md-6 mb-xl-0 mb-4">
                <div className="card card-blog card-plain">
                  <div className="card-header p-0 mt-n4 mx-3">
                    <a className="d-block shadow-xl border-radius-xl">
                      <img
                        src={service.imageUrl}
                        alt="img-blur-shadow"
                        className="img-fluid shadow border-radius-xl"
                      />
                    </a>
                  </div>
                  <div className="card-body p-3">
                    <a href="javascript:;" style={{ color: "black" }}>
                      <h4 style={{ color: "solid black" }}>
                        {service?.servicename}...
                      </h4>
                    </a>
                    <p className="mb-0 text-sm">
                      <h6> Category :-</h6>
                      {service?.category?.name},<br></br>
                      <h6> Sub-Category :-</h6>
                      {service?.subcategory?.name}
                      <br></br>
                    </p>
                    <div className="d-flex align-items-center justify-content-between">
                      <Link
                        to={`/user/detailservice/${service._id}`}
                        className="btn bg-gradient-primary w-100 my-2 mb-4">
                        Details{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BookService;
