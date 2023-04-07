'use client';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface Data {
    timePeriod: string;
    value: number;
}

interface AreaPlotProps {
    color: string;
    data: Data[];
}

const AreaPlot: React.FC<AreaPlotProps> = ({ color, data }) => {
    return (
        <ResponsiveContainer width="100%" height="100%" className='m-0 p-0'>

            <AreaChart width={1000} height={500} data={data} className='w-full h-full'>
                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                {/* <XAxis dataKey="timePeriod" /> */}
                {/* <YAxis /> */}
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke={color} fill={color} fillOpacity={0.3} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default AreaPlot;