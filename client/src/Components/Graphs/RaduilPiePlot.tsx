'use client';
import React from "react";
import ReactApexChart from "react-apexcharts";


interface RaduilPiePlotState {
    series: number[];
    options: {
        chart: {
            height: number;
            type: "radialBar";
        };
        plotOptions: {
            radialBar: {
                dataLabels: {
                    name: {
                        fontSize: string;
                    };
                    value: {
                        fontSize: string;
                    };
                    total: {
                        show: boolean;
                        label: string;
                        formatter: (w: any) => string; // Updated type to string
                    };
                };
            };
        };
        labels: string[];
    };
}

class RaduilPiePlot extends React.Component<{}, RaduilPiePlotState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            series: [44, 55, 67, 83],
            options: {
                chart: {
                    height: 350,
                    type: "radialBar",
                },
                plotOptions: {
                    radialBar: {
                        dataLabels: {
                            name: {
                                fontSize: "22px",
                            },
                            value: {
                                fontSize: "16px",
                            },
                            total: {
                                show: true,
                                label: "Total",
                                formatter: (w: any) => {
                                    return w.globals.seriesTotals.reduce((a: number, b: number) => a + b, 0).toString();
                                },
                            },
                        },
                    },
                },
                labels: ["Cardilogram", "Gynecology", "Dental Care", "Neurology"],
            },
        };
    }

    render() {
        return (
            <div id="chart">
                <ReactApexChart
                    options={this.state.options}
                    series={this.state.series}
                    type="radialBar"
                    height={350}
                />
            </div>
        );
    }
}

export default RaduilPiePlot;