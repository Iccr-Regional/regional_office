import{
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
}from 'chart.js';
import {Bar} from 'react-chartjs-2';
import React, {useState, useEffect} from "react";
ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend 
);
 const ChartOptions={
    indexAxis:'x',
    elements:{
        bar:{
            borderWidth:2,
        },
    },
    responsive:true,
    plugins:{
       legend:{
        position:"top"
       },
       title:{
        display:false,
        text:"No.of events conducted",
       },
    },
};

function BarChart() {

    const [chartData, setChartData] = useState({
        datasets: [],
    })

    useEffect(() => {
        const fetchData=async()=>{

            const url='http://localhost:3001/chart1'

            const dataSet1=[];
         fetch (url).then((data)=>{
            console.log("Api data",data)
            const res=data.json();
            return res
            }).then((res)=>{
                console.log("ressss",res)
                for (const val of res)
                {

                    dataSet1.push(val.ne);

                }
        setChartData({
            labels: ["Delhi University","Ahmedabad","Bangalore","Guwahati","Jammu","Kolkata","Lucknow","Mumbai","Patna","Pune","Shillong"],
            datasets: [
                {

                   label:["No.of events conducted"], 

                   data:dataSet1,
                   borderColor:['rgba(255, 99,132,1)'],
                   backgroundColor:['rgba(255, 99, 132, 0.5)',],
                },
            ],
        })
        console.log("arrData",dataSet1)
            }).catch(e=>{
                console.log("error",e)
            })
        }
        fetchData();
    },[]);

    return(
        <div className="BarChart container">

            <div className='row'>
                <div className='col-* col-md-12'>
                <h3 className='text-center'>Event</h3>
                <Bar options={ChartOptions} data={chartData}/>
                </div>
            </div>
            

          </div>
        );
}
export default BarChart;