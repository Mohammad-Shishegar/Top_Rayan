import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 200 },
    { name: 'Group C', value: 200 },
    { name: 'Group D', value: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const PieChartComponent = (props) => {


    return (
        <div style={{ width: "95%", height: "300px"  }}>
            <h5 style={{ textAlign: "right" , marginBottom:"15px" , marginTop:"40px"}}>{props.title}</h5>
            <ResponsiveContainer width="100%" height="80%">

                <PieChart width={"100%"} height={"100%"}>
                    <Pie
                        data={props.data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default PieChartComponent