import React, { useRef, useEffect } from 'react';
import Chart from 'react-apexcharts';

interface Data {
    timePeriod: string;
    value: number;
}

interface AreaPlotProps {
    color: string;
    data: Data[];
}

const AreaPlot: React.FC<AreaPlotProps> = ({ color, data }) => {
    const chartRef = useRef<any>(null);

    useEffect(() => {
        if (chartRef.current && chartRef.current.updateOptions) { // Check if updateOptions method is available
            const gradientFill = {
                type: 'gradient',
                gradient: {
                    shade: 'light',
                    type: 'vertical',
                    shadeIntensity: 0.5,
                    inverseColors: false,
                    opacityFrom: 1,
                    opacityTo: 0,
                    stops: [0, 70, 100],
                },
            };

            const chartOptions = {
                chart: {
                    type: 'area',
                    stacked: false,
                    toolbar: {
                        show: false,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                series: [
                    {
                        data: data.map((d) => d.value),
                        name: 'Series 1',
                        colors: [color],
                    },
                ],
                fill: gradientFill,
                stroke: {
                    width: 2,
                    curve: 'smooth',
                },
                markers: {
                    size: 0,
                },
                xaxis: {
                    categories: data.map((d) => d.timePeriod),
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                yaxis: {
                    show: false,
                    labels: {
                        show: false,
                    },
                    axisBorder: {
                        show: false,
                    },
                },
                tooltip: {
                    enabled: true,
                    intersect: false,
                },
                legend: {
                    show: false,
                },
            };

            chartRef.current.updateOptions(chartOptions);
        }
    }, [color, data]);

    return (
        <div style={{ height: '70%', width: '100%' }}>
            <Chart options={{}} series={[]} type="area" ref={chartRef} />
        </div>
    );
};

export default AreaPlot;
