import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";


const LoadingMain = () => (
  <div className="d-flex justify-content-center">
    <div class="spinner-border text-primary" role="status" style={{margin: "50vh"}}>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
);

export default LoadingMain;