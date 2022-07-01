import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const TinyBarChart = (props) => {

    return (
        <div style={{ width: "95%", height: "300px" }}>
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
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="farm" fill="#8884d8" />

                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

export default TinyBarChart