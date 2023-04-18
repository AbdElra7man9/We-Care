'use client';
import { Bar } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);


const ColumnPlot: React.FC = () => {
    const data: ChartData<'bar'> = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [10, 20, 30, 40, 50, 60, 70],
                backgroundColor: '#36a2eb',
                borderColor: '#36a2eb',
                borderWidth: 1,
            },
        ],
    };

    const options: ChartOptions<'bar'> = {
        // scales: {
        //     yAxes: [
        //         {
        //             ticks: {
        //                 beginAtZero: true,
        //             },
        //         },
        //     ],
        // },
    };
    return <Bar data={data} options={options} />;
};

export default ColumnPlot;
