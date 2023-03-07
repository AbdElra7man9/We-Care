import { Pie } from '@ant-design/plots';

const DonutPlot = () => {
    const data = [
        {
            value: 15,
            type: 'Hemoglobin',
        },
        {
            value: 30,
            type: 'Suger',
        },
        {
            value: 50,
            type: 'Heartbeat',
        },
    ];
    const config = {
        data,
        angleField: 'value',
        colorField: 'type',
        radius: .8,
        innerRadius: 0.8,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
            },
        },
        statistic: {
            title: false,
            content: {
              style: {
                whiteSpace: 'pre-wrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                fontSize:25,
              },
              content: '93%',
            },
          },
    };
    return <Pie {...config} />;
};

export default DonutPlot
