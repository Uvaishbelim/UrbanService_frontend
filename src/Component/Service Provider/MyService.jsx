import axios from "axios";
import React, { useEffect, useState } from "react";

export const MyService = () => {
  
  const [serviceprovider, setserviceprovider] = useState([])

  const id = localStorage.getItem("id");  
  const fetchMyService = async () => {
    if (id !== undefined || id !== null) {
      const res = await axios.get(
        "http://localhost:4000/service/service/provider/"+id
        
      );
      console.log(res.data);
      setserviceprovider(res.data.data);
    }
  };

  const deleteService = async()=>{
    const res = await axios.delete("http://localhost:4000/service/service/" + serviceprovider._id)
    setserviceprovider(res.data.data)
  }
  


  useEffect(() => {
    if (id != undefined || id !== null) {
      console.log("id.......",id)
      fetchMyService();
      deleteService();
    }
  }, []);

  return (
    <div className="col-md-12">
      <div className="card strpied-tabled-with-hover">
        <div className="card-header ">
          <h4 className="card-title">My Service</h4>
          <p className="card-category">Here is your added service</p>
        </div>
        <div className="card-body table-full-width table-responsive">
          <table className="table table-hover table-striped">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>Subcategory</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {serviceprovider.map((serpro)=>{
                {return (
                  <tr>
                    <td>{serpro.servicename}</td>
                    <td>{serpro.category?.name}</td>
                    <td>{serpro.subcategory?.name}</td>
                    <td><button className="btn btn-danger" onClick={()=>deleteService(serpro._id)}>DELETE</button></td>
                  </tr>
                );}
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
