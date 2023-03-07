
import { Area } from '@ant-design/plots';

const AreaPlot = () => {
    const data = [
        {
            "timePeriod": "2006 Q3",
            "value": 1
        },
        {
            "timePeriod": "2006 Q4",
            "value": 3.08
        },
        {
            "timePeriod": "2007 Q1",
            "value": 2.17
        },
        {
            "timePeriod": "2007 Q2",
            "value": 1.26
        },
    ]
    const config = {
        data,
        hight: '20rem',
        autoFit: true,
        smooth: true,
        color: 'green',
        yAxis: {
            grid: {
                line: {
                    style: {
                        opacity: .0,
                    }
                }
            }
        },
        
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };

    return <Area {...config
    } />;
};

export default AreaPlot
