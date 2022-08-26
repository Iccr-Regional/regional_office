import React from "react";
import AdminNavigation from "./AdminNavigation";
import BarChart from "./BarChart";
import Footer from "./footer";
import BarChart4 from "./BarChart4";
import BarChart3 from "./BarChart3";
import BarChart2 from "./BarChart2";
import BarChart1 from "./BarChart1";
import PieChart from "./PieChart";

function AdminStatistics() {
  return (
    <div className="">
        <AdminNavigation/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <BarChart/>
        <br/>
        <br/>
        <br/>
        <BarChart1/>
        <br/>
        <br/>
        <br/>
        <BarChart2/>
        <br/>
        <br/>
        <br/>
        <BarChart3/>
        <br/>
        <br/>
        <br/>
        <BarChart4/>
        <br/>
        <br/>
        <br/>
        <PieChart/>
        <br/>
        
        <Footer/>
    </div>
  );
}

export default AdminStatistics;