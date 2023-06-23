import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Axios from "../Axios";
import AdminAdd from "../components/Admin-add";
import AdminDelete from "../components/Admin-delete";

export default function Admin() {
  return (
    <>
      <Navbar />
      <div className="adminPanel">
        <div className="prideti">
          <AdminAdd />
        </div>
        {/* <div className="pašalinti">
          <AdminDelete />
        </div> */}
        <div className="redaguoti"></div>
      </div>
      <Footer />
    </>
  );
}
