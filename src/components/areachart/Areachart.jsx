import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import './Areachart.css'
const data = [
  {
    name: 'January',
    uv: 2342,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'February',
    uv: 242,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'March',
    uv: 582,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'April',
    uv: 1780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'May',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'June',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'July',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'August',
    uv: 1900,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'September',
    uv: 1000,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'October',
    uv: 2732,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'November',
    uv: 1430,
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'December',
    uv: 3300,
    pv: 4300,
    amt: 2100,
  },

];

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/p/sandbox/simple-area-chart-4y9cnl';

  render() {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}
