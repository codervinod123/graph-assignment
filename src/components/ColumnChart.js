import React from 'react';
import ReactApexChart from 'react-apexcharts';
import "./ColumnChart.css"

const colors = ['#42275a'];

const ColumnChart = () => {
    const options = {
        chart: {
            height: 270,
            type: 'bar',
            events: {
                click: function(chart, w, e) {
                    // console.log(chart, w, e)
                }
            }
        },
        colors: colors,
        plotOptions: {
            bar: {
                columnWidth: '70%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                ["BRAND A"],
                ["BRAND B"],
                ["BRAND C"],
                ["BRAND D"],
                ["BRAND E"],
                "OTHERS"
            ],
            labels: {
                style: {
                    fontSize: '9px',
                    color: "gray", // Corrected 'colors' to 'color'
                }
            }
        },
        grid: {
            show: false, // Set this to false to remove horizontal grid lines
        },
    };

    const series = [{
        data: [100, 100, 80, 80, 80, 90]
    }];

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="bar" height={270} />
        </div>
    );
};

export default ColumnChart;
