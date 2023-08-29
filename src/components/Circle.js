import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const Circle = () => {
  const [series, setSeries] = useState([45, 55, 45, 45, 45]);
 
  const options = {
    chart: {
      type: 'donut',
      height: 240, // Adjust the height as needed
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
            height: 160, // Adjust the height for responsiveness
           
          },
          legend: {
            position: 'bottom',
          },
         
        },
      },
    ],
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="donut" height={520}/>
    </div>
  );
};

export default Circle;
