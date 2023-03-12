import { Box } from '@raber/react';
import { useState } from 'react';
import { Area, AreaChart, Tooltip, XAxis, YAxis } from 'recharts';

const data = [
  { name: 0, uv: 40, pv: 2400, amt: 2400 },
  { name: 1, uv: 30, pv: 1398, amt: 2210 },
  { name: 2, uv: 20, pv: 9800, amt: 2290 },
  { name: 3, uv: 27, pv: 3908, amt: 2000 },
  { name: 4, uv: 18, pv: 4800, amt: 2181 },
  { name: 5, uv: 23, pv: 3800, amt: 2500 },
  { name: 6, uv: 34, pv: 4300, amt: 2100 },
  { name: 7, uv: 34, pv: 4300, amt: 2100 },

];

export const AreaChartWithBackground = () => {

    const [width, setWidth] = useState(500);
    const [height, setHeight] = useState(200);

    // useEffect(() => {
    //     const handleResize = () => {
    //       setWidth(document.getElementById('chart-container').clientWidth);
    //       setHeight(document.getElementById('chart-container').clientHeight);
    //     };
    
    //     window.addEventListener('resize', handleResize);
    //     handleResize();
    
    //     return () => window.removeEventListener('resize', handleResize);
    //   }, []);

  return (
    <div style={{
        position: 'relative',
    }} 
    id="chart-container" 
    >
    {/* <ResponsiveContainer width={300} height={200}> */}

    <Box name="main"/>
    <AreaChart data={data} width={width} height={height} style={{
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
      <XAxis dataKey="name" tick={() => null as any} tickMargin={-20} axisLine={false} tickLine={false}/>
      <YAxis hide={true} label="" tick={() => null as any} axisLine={false} tickLine={false}/>
      {/* <CartesianGrid strokeDasharray="" /> */}
      <Tooltip />
      <Area type="monotone" dataKey="uv" stroke="#8884d8" style={{
        margin: 0
      }} fillOpacity={1} fill="url(#color)" />
    </AreaChart>
    {/* <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart> */}
   {/* </ResponsiveContainer> */}
     </div>

  );
};

// export const AreaChartWithBackground;
