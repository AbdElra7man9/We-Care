'use client'; import { Pie } from 'react-chartjs-2';
import { ChartData, ChartOptions } from 'chart.js';
import React from 'react';
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
ChartJS.register(...registerables);

const DonutPlot: React.FC = () => {
    const data: ChartData = {
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

    const options: ChartOptions = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };

    return <Pie data={data} options={options} />;
};

export default DonutPlot;

