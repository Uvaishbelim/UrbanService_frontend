import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export const Login = () => {

  const {register,handleSubmit} = useForm();
  const [role, setrole] = useState("6623bbb935dab67f9762eb30");

  
  const submitHandler = async(data)=>{
    try{
      if (role == "6623bbb935dab67f9762eb30") {
        const res = await axios.post(
          "http://localhost:4000/user/user/login",
          data
        );
        if (res.status == 200) {
          console.log("Login Successfully..");
          console.log(res.data.data);
          localStorage.setItem("id", res.data.data._id);
          window.location.pathname="/user/dashboard";
          
        }
      } else if (role == "6623bbc435dab67f9762eb32") {
        const res = await axios.post(
          "http://localhost:4000/serviceprovider/serviceprovider/login",
          data
        );
        if (res.status == 200) {
          console.log("Login Successfully..");
          console.log(res.data.data);
          localStorage.setItem("id", res.data.data._id);
          window.location.pathname = "/serviceprovider/dashboard";
          
        }
      }
    }catch(error){
      console.log(error.response.data)
    }
  }

  

  return (
    <div
      className="page-header align-items-start min-vh-100"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <span className="mask bg-gradient-dark opacity-6" />
      <div className="container my-auto">
        <div className="row">
          <div className="col-lg-4 col-md-8 col-12 mx-auto">
            <div className="card z-index-0 fadeIn3 fadeInBottom">
              <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                <div className="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                  <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">
                    Sign in
                  </h4>
                </div>
              </div>
              <div className="card-body">
                <form
                  role="form"
                  className="text-start"
                  onSubmit={handleSubmit(submitHandler)}
                >
                  <select
                    className="input-group input-group-outline mb-3"
                    value={role}
                    onChange={(e) => setrole(e.target.value)}
                  >
                    <option>SELECT ROLE</option>
                    <option value="6623bbb935dab67f9762eb30">User</option>
                    <option value="65c5dd6dfe286397b6429352">
                      Service Provider
                    </option>
                  </select>
                  <label className="form-label">Email</label>
                  <div className="input-group input-group-outline my-3">
                    <input
                      type="email"
                      className="form-control"
                      {...register("email")}
                    />
                  </div>
                  <label className="form-label">Password</label>
                  <div className="input-group input-group-outline mb-3">
                    <input
                      type="password"
                      className="form-control"
                      {...register("password")}
                    />
                  </div>
                  <div className="text-center">
                    <input
                      type="submit"
                      value="Sign In"
                      className="btn bg-gradient-primary w-100 my-4 mb-2"
                    />
                  </div>
                  <p className="mt-4 text-sm text-center">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="text-primary text-gradient font-weight-bold"
                    >
                      Sign up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
