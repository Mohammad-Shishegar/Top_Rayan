import React, { PureComponent , useContext} from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import {SizeContext} from "../../services/context/WindowSize"


const SimpleBarChart = (props) => {

  const Size = useContext(SizeContext)

  return (
    <div style={Size.size < 405 ? {width:"95%" , height:"350px"} : {width:"95%" , height:"300px"}}>
      <h5 style={{ textAlign: "right" , marginBottom:"15px" , marginTop:"20px"}}>{props.title}</h5>
      <ResponsiveContainer width={"100%"} height={"90%"}>
      <BarChart
        width={"100%"}
        height={"100%"}
        data={props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pesticides" fill="#8884d8" />
        <Bar dataKey="water" fill="#82ca9d" />
      </BarChart>
        </ResponsiveContainer>
    </div>
  );
}

export default SimpleBarChart