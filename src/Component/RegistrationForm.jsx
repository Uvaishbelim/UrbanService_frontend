import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const RegistrationForm = () => {

  const navigate = useNavigate()
  const { register, handleSubmit } = useForm();
  const [selectedRole, setSelectedRole] = useState("65c5dd25fe286397b6429350");

  const handleChange = (event) => {
    setSelectedRole(event.target.value);
  };

  const submitHandler = async (data) => {
    const { ...userData } = data;

    // Log the data to the console
    console.log("Submitted Data:", userData);


    // Send data to the respective API based on the selected role
    try {
      if (selectedRole === "65c5dd25fe286397b6429350") {
        await axios.post("http://localhost:4000/user/user", userData);
        console.log("User registration successful");
        window.location.href = "/user/dashboard";
        
      } else if (selectedRole === "65c5dd6dfe286397b6429352") {
        await axios.post("http://localhost:4000/serviceprovider/serviceprovider", userData);
        console.log("Service Provider registration successful");
        // window.location.href = "/serviceprovider/dashboard";
        navigate('/serviceprovider/dashboard')
      }
    } catch (error) {
      console.error("Error during registration:", error.message);
    }
  };

  return (
    <div className="page-header min-vh-100">
      <div className="container">
        <div className="row">
          <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
            <div
              className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              style={{
                backgroundImage:
                  'url("../assets/img/illustrations/illustration-signup.jpg")',
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
            <div className="card card-plain">
              <div className="card-header">
                <h4 className="font-weight-bolder">Sign Up</h4>
              </div>
              <div className="card-body">
                <form role="form" onSubmit={handleSubmit(submitHandler)}>
                  <div class="form-check">
                    <div>
                      <label className="form-label" htmlFor="user">
                        <input
                          className="input-group-outline"
                          type="radio"
                          name="user"
                          value="65c5dd25fe286397b6429350"
                          defaultChecked
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          {...register("role")}
                        />
                        User
                      </label>

                      <label className="form-label" htmlFor="serviceprovider">
                        <input
                          className="input-group-outline"
                          type="radio"
                          name="serviceprovider"
                          value="65c5dd6dfe286397b6429352"
                          onChange={(e) => {
                            handleChange(e);
                          }}
                          {...register("role")}
                        />
                        ServiceProvider
                      </label>
                    </div>
                  </div>
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      {...register("name")}
                    />
                  </div>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="email"
                      className="form-control"
                      {...register("email")}
                    />
                  </div>
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="password"
                      className="form-control"
                      {...register("password")}
                    />
                  </div>
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      {...register("phone")}
                    />
                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      value="Sign Up"
                      className="btn btn-lg bg-gradient-primary btn-lg w-100 mt-4 mb-0"
                    />
                  </div>
                </form>
              </div>
              <div className="card-footer text-center pt-0 px-lg-2 px-1">
                <p className="mb-2 text-sm mx-auto">
                  Already have an account?
                  <Link
                    to="/"
                    className="text-primary text-gradient font-weight-bold"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
