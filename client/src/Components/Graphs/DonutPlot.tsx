'use client';
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ChartData, registerables, ChartOptions } from 'chart.js';

ChartJS.register(...registerables);

const DonutPlot: React.FC = () => {
    const data: ChartData<'pie'> = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'Sales',
                data: [10, 20, 30, 40, 50, 60, 70],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#37d6c6',
                    '#f7786b',
                    '#9b59b6',
                    '#2ecc71'
                ],
            },
        ],
    };

    const options: ChartOptions<'pie'> = {
        // scales: {
        //   yAxes: [
        //     {
        //       ticks: {
        //         beginAtZero: true,
        //       },
        //     },
        //   ],
        // },
    };

    return <Pie data={data} options={options} />;
};

export default DonutPlot;
