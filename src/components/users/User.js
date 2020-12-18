import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";


const User = () => {

  return (
    <div className="container py-4">
      <Link className="btn btn-primary" to="/">
        back to Home
      </Link>
      <h1 className="display-4">User Id:</h1>
      <hr />
      <ul className="list-group w-50">
      
      </ul>
    </div>
  );
};

export default User;
