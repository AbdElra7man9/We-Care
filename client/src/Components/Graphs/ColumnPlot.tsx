'use client';
import React from "react";
import ReactApexChart from "react-apexcharts";

interface ColumnPlotState {
    series: { name: string; data: number[] }[];
    options: {
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: boolean;
                columnWidth: string;
                endingShape: string;
            };
        };
        dataLabels: {
            enabled: boolean;
        };
        stroke: {
            show: boolean;
            width: number;
            colors: string[];
        };
        xaxis: {
            categories: string[];
        };
        yaxis: {
            title: {
                text: string;
            };
        };
        fill: {
            opacity: number;
        };
        tooltip: {
            y: {
                formatter: (val: number) => string;
            };
        };
    };
}

class ColumnPlot extends React.Component<{}, ColumnPlotState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            series: [
                {
                    name: "Male",
                    data: [44, 55, 57, 56, 61, 58, 63, 60, 50, 46, 64, 40],
                },
                {
                    name: "Female",
                    data: [76, 85, 101, 98, 87, 105, 91, 114, 94, 88, 97, 70],
                },
                {
                    name: "Children",
                    data: [35, 41, 36, 26, 45, 48, 52, 53, 41, 14, 85, 50],
                },
            ],
            options: {
                chart: {
                    type: "bar",
                    height: 350,
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: "40%",
                        endingShape: "rounded",
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ["transparent"],
                },
                xaxis: {
                    categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                },
                yaxis: {
                    title: {
                        text: "Patients",
                    },
                },
                fill: {
                    opacity: 1,
                },
                tooltip: {
                    y: {
                        formatter: function (val: number) {
                            return val + " Patient";
                        },
                    },
                },
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    height={350}
                />
            </div>
        );
    }
}

export default ColumnPlot;
