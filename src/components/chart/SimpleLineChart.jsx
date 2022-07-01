import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const SimpleLineChart = (props) => {

    return (
        <div style={{ width: "95%",height: "300px"  }}>
            <h5 style={{ textAlign: "right" , marginBottom:"15px" , marginTop:"40px"}}>{props.title}</h5>
            <ResponsiveContainer width={"100%"} height={"90%"}>
                <LineChart
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
                    <Line type="monotone" dataKey="water" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SimpleLineChart