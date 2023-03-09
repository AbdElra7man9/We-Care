
import { Area } from '@ant-design/plots';

const AreaPlot = ({ Color, data }) => {

    const config = {
        data,
        height: '500px', // set height to 400 pixels
        width: '100%',
        autoFit: true,
        smooth: true,
        color: Color,
        yAxis: {
            grid: {
                line: {
                    style: {
                        opacity: .0,
                    }
                }
            },
            visible: false // hide Y-axis

        },

        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
            visible: false // hide Y-axis

        },
    };

    return <Area {...config
    } />;
};

export default AreaPlot
