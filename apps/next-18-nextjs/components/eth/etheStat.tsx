import * as Raber from '@raber/react';
import React from 'react';
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];

export const Chart = () => {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            position: 'relative'
        }}>
            <Raber.Box name="main" key="main" />
            <ResponsiveContainer width='100%' height='100%'>
                <AreaChart data={data} style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    // marginLeft: -70
                }}>
                    <defs>
                        <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="100%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                    </defs>

                    <XAxis dataKey="name" hide={true} tickLine={false} axisLine={false} />
                    <YAxis hide={true} />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" style={{
        margin: 0
      }} fillOpacity={1} fill="url(#color)" />                    {/* <Area type="monotone" dataKey="uv" stackId="1" stroke="#82ca9d" fill="#82ca9d" /> */}
                </AreaChart>
            </ResponsiveContainer>
        </div>

    );
};