import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './ColumnChart.css'; // Import the CSS file for styling

const ApexChart = () => {
  const [series, setSeries] = useState([
    {
      data: [300, 350, 400, 600, 700, 900, 1000, 1250, 1300, 1580].reverse()
    }
  ]);

  const options = {
    chart: {
      type: 'bar',
      height: 350,
      color: "red",
    },
    plotOptions: {
      bar: {
        horizontal: true
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      categories: [
        'SUB INDUSTRY1',
        'SUB INDUSTRY1',
        'SUB INDUSTRY1',
        'SUB INDUSTRY1',
        'SUB INDUSTRY1',
        'SUB INDUSTRY1',
        'SUB INDUSTRY1',
        'SUB INDUSTRY1',
        'OTHERS'
      ],
      
    },
    colors: ['#FF0000'],
    grid: {
      show: false, // Set this to false to remove horizontal grid lines
    },
  };

  return (
    <div id="chart">
      <ReactApexChart options={options} series={series} type="bar" height={380}/>
    </div>
  );
};

export default ApexChart;
