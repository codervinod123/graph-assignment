
import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import './ColumnChart.css';


const generateDayWiseTimeSeries = (baseval, count, yrange,val) => {
   
  var i = val;
  var series = [];
  while (i < count+val) {
    var x = baseval;
    var y =
      Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

    series.push([x, i]);
    baseval += 86400000;
    i++;
  }
  console.log(series);
  return series;

};

const LineChart = () => {
  const [series, setSeries] = useState([
    {
      name: 'TIER 1',
      data: generateDayWiseTimeSeries(new Date('1 Jul 2023 GMT').getTime(), 30, {
        min: 10,
        max: 60,
      },2),
    },
    {
      name: 'TIER 2',
      data: generateDayWiseTimeSeries(new Date('1 Jul 2023 GMT').getTime(), 30, {
        min: 10,
        max: 20,
      },4),
    },
    {
      name: 'TIER 3',
      data: generateDayWiseTimeSeries(new Date('1 Jul 2023 GMT').getTime(), 30, {
        min: 10,
        max: 15,
      },6),
    },
  ]);

  const options = {
    chart: {
      type: 'area',
      height: 350,
      stacked: true,
      toolbar: {
        show: false, // Remove the zoom buttons and home button
      },
      events: {
        selection: (chart, e) => {
          console.log(new Date(e.xaxis.min));
        },
      },
    },
    colors: ['yellow', 'red', 'blue'],
   
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    fill: {
      colors: ['yellow', 'red', 'blue'], // Set individual colors for each series
    },
    
    legend: {
      position: 'top',
      horizontalAlign: 'left',
    },
    xaxis: {
      type: 'datetime',
      labels: {
        show: false, // Hide the date labels
      },
    },
    yaxis: {
      labels: {
        show: false, // Hide the date labels
      },
    },
  };

  return (
    <div id="chart" style={{ border: 'none' }}>
      <ReactApexChart options={options} series={series} type="area" height={240} />
    </div>
  );
};

export default LineChart;

