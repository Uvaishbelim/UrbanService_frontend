import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

export const AddService = () => {
    const {register, handleSubmit} = useForm();
    const [categories, setcategories] = useState([])
    const [subcategory, setsubcategory] = useState([])
    const [type, settype] = useState([])
    const submitHandler = async(data) => {
      const id = localStorage.getItem("id")
      const dataObj = Object.assign(data, { serviceprovider :id});
      if(id!==undefined){
        const res = await axios.post("http://localhost:4000/service/service",dataObj)
        console.log(res.data.data);
        console.log(data);
      }
    }

    const loadType = async () => {
      const res = await axios.get(
        "http://localhost:4000/type/type"
      );
      console.log(res.data.data);
      settype(res.data.data);
    };

    const loadSubCategories = async () => {
      const res = await axios.get("http://localhost:4000/subcategory/subcategory");
      console.log(res.data.data);
      setsubcategory(res.data.data);
    };
  const loadCategories = async() => {

      const res = await axios.get('http://localhost:4000/category/category');
      console.log(res.data.data);
      setcategories(res.data.data);

  }
  useEffect(() => {
    
    loadCategories();
    loadSubCategories();
    loadType();
  }, [])
  return (
    <div className="card card-plain" style={{ width: 700, marginLeft: 250 }}>
      <div className="card-header">
        <h4 className="font-weight-bolder text-center">Add service</h4>
      </div>
      <div className="card-body">
        <form role="form" onSubmit={handleSubmit(submitHandler)}>
          <label className="form-label">Service Name</label>
          <div className="input-group input-group-outline mb-3">
            <input
              placeholder="Enter Your Service Name"
              className="form-control"
              type="text"
              {...register("servicename")}
            />
          </div>
          <label className="form-label">Category</label>
          <div className="input-group input-group-outline mb-3">
            <select className="form-control" {...register("category")}>
              <option>SELECT CATEGORY</option>
              {categories?.map((cat) => {
                return (
                  <>
                    <option value={cat._id}>{cat.name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <label className="form-label">Subcategory</label>
          <div className="input-group input-group-outline mb-3">
            <select className="form-control" {...register("subcategory")}>
              <option>SELECT SUBCATEGORY</option>
              {subcategory?.map((subcat) => {
                return (
                  <>
                    <option value={subcat._id}>{subcat.name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <label className="form-label">Type</label>
          <div className="input-group input-group-outline mb-3">
            <select className="form-control" {...register("type")}>
              <option>SELECT TYPE</option>
              {type?.map((type) => {
                return (
                  <>
                    <option value={type._id}>{type.name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <label className="form-label">Fees</label>
          <div className="input-group input-group-outline mb-3">
            <input
              placeholder="Enter Your Fees"
              className="form-control"
              type="text"
              {...register("fees")}
            />
          </div>
          <label className="form-label">Area</label>
          <div className="input-group input-group-outline mb-3">
            <input
              placeholder="Enter Your Area"
              className="form-control"
              type="text"
              {...register("area")}
            />
          </div>
          <label className="form-label">State</label>
          <div className="input-group input-group-outline mb-3">
            <input
              placeholder="Enter Your State"
              className="form-control"
              type="text"
              {...register("state")}
            />
          </div>
          <div className="text-center" style={{ width: 100, marginLeft: 250 }}>
            <input type="submit" value="submit" className="btn btn-success" />
            <input type="reset" value="reset" className="btn btn-danger" />
          </div>
        </form>
      </div>
    </div>
  );
}
