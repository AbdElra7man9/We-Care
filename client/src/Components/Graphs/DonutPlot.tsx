'use client';
import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

interface DonutChartProps {
    data: number;
    filledColor: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ data, filledColor }) => {
    const filledPercentage = Math.round((data / 100) * 100);
    const unfilledPercentage = 100 - filledPercentage;
    const unfilledColor = '#cccccc'; // Static unfilled color

    const chartOptions: ApexOptions = {
        chart: {
            type: 'donut',
        },
        plotOptions: {
            pie: {
                startAngle: -90,
                endAngle: 270,
                donut: {
                    size: '85%',
                    labels: {
                        show: false,
                    },
                },
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: false,
        },
        labels: [`${filledPercentage}%`],
        colors: [filledColor, unfilledColor],
        fill: {
            colors: [filledColor, unfilledColor],
        },
        legend: {
            show: false,
        },
    };

    const chartSeries = [filledPercentage, unfilledPercentage];

    return (
        <div>
            <Chart options={chartOptions} series={chartSeries} type="donut" width="300" />
        </div>
    );
};

export default DonutChart;
