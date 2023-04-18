'use client'; import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip } from 'chart.js';
import { useRef, useEffect } from 'react';

interface Data {
    timePeriod: string;
    value: number;
}

interface AreaPlotProps {
    color: string;
    data: Data[];
}

const AreaPlot: React.FC<AreaPlotProps> = ({ color, data }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const gradientFillId = `gradient-fill-${color}`;

    useEffect(() => {
        if (canvasRef.current) {
            Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Tooltip);

            const ctx = canvasRef.current.getContext('2d');

            if (ctx) {
                const gradientFill = ctx.createLinearGradient(0, 0, 0, 150);
                gradientFill.addColorStop(0, color);
                gradientFill.addColorStop(0.7, 'rgba(255, 255, 255, 0)');
                gradientFill.addColorStop(1, 'rgba(255, 255, 255, 0)');

                const chart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: data.map((d) => d.timePeriod),
                        datasets: [
                            {
                                data: data.map((d) => d.value),
                                borderColor: color,
                                backgroundColor: gradientFill,
                                fill: true,
                                tension: 0.4,
                                borderWidth: 2.5,
                                pointRadius: 0,
                            },
                        ],
                    },
                    options: {
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                            },
                            y: {
                                grid: {
                                    display: false,
                                },
                            },
                        },
                        plugins: {
                            tooltip: {
                                mode: 'nearest',
                                intersect: false,
                            },
                            legend: {
                                display: false,
                            },
                        },
                    },
                });

                return () => {
                    chart.destroy();
                };
            }
        }
    }, [canvasRef, color, data]);

    return (
        <div style={{ height: '80%', width: '100%' }}>
            <canvas ref={canvasRef} />
        </div>
    );
};

export default AreaPlot;
