import React, { useState, useEffect } from "react";

import { LineChart, ResponsiveContainer,Legend, Tooltip, Line,AreaChart, Area, CartesianGrid, XAxis, YAxis } from 'recharts';
import BarChart from 'react-bar-chart';
import {Bar} from 'react-chartjs-2';

import "../../scss/newHome.scss";

// const data1 = [
//     {name: 'Geeksforgeeks', students: 400},
//     {name: 'Technical scripter', students: 700},
//     {name: 'Geek-i-knack', students: 200},
//     {name: 'Geek-o-mania', students: 1000}
// ];

const data = [
    {name: 'Geeksforgeeks', students: 400},
    {name: 'Technical scripter', students: 700},
    {name: 'Geek-i-knack', students: 200},
    {name: 'Geek-o-mania', students: 1000}
];

const pdata = [
    {
        name: 'MongoDb',
        fees: 120
    },
    {
        name: 'Javascript',
        fees: 12
    },
    {
        name: 'PHP',
        fees: 60
    },
    {
        name: 'Java',
        fees: 25
    },
    {
        name: 'C#',
        fees: 190
    },
    {
        name: 'C++',
        fees: 20  
    },
];
const NewHome = () => {
 
  return (
    <div className="new-home">
        <div className="page-wrapper">
            <div className="page-top"></div>
            <div className="page-content">
                <div className="row">
                    <div className="col-6 left-side">
                        <div className="left-top">
                            <div className="perform part-info pt-3">
                                <h4>PERFORMANCE</h4>
                                <p className="part-description">Lifts Performance Today:</p>
                                <div className="outcircle">
                                    <div className="incircle"><span>1</span></div>
                                </div>
                                <p className="text-center pt-3">Lift 10mT</p>
                                <h5 className="text-center">Performance Trend</h5>
                          
                            </div>
                            <div className="operation part-info pt-3">
                                <h4>OPERATION</h4>
                                <p className="part-description">Active Host:</p>
                                <div className="row">
                                    <div className="col-6 hoist1_2">
                                        Hoist 1 & 2
                                    </div>
                                    <div className="col-6 hoist3">
                                        <div className="inDraw">
                                            Hoist 3
                                        </div>
                                    </div>
                                </div>
                                <div className="row pt-3">
                                    <div className="col-6 display-val">
                                        <h5>Load</h5>
                                        <div className="val-txt">
                                            119
                                        </div>
                                    </div>
                                    <div className="col-6 display-val">
                                        <h5>Speed</h5>
                                        <div className="val-txt">
                                            8.77
                                        </div>
                                    </div>
                                </div>
                                <h5 className="text-center pt-3">Pots satety Limits</h5>
                                <AreaChart width={400} height={200} data={data}>
                                    <Area dataKey="students" fill="yellow" stroke="yellow" />
                                    <CartesianGrid stroke="#ccc" />
                                    <XAxis dataKey="name" />
                                    <YAxis />
                                </AreaChart>
                            </div>

                        </div>
                        <div className="left-bottom text-center mt-3 pt-3">
                            <h4>OPERATIOIN INSIGHT</h4>
                            <div className="row">
                                <div className="col-4">
                                    <h5>Lifting trend</h5>
                                    <ResponsiveContainer width="100%" aspect={3}>
                                        <LineChart data={pdata}>
                                            <CartesianGrid />
                                            <XAxis dataKey="name" 
                                                interval={'preserveStartEnd'} />
                                            <YAxis></YAxis>
                                            <Tooltip />
                                            <Line dataKey="fees"
                                                stroke="red" activeDot={{ r: 8 }} />
                                        </LineChart>
                                    </ResponsiveContainer>
                                </div>
                                <div className="col-4">
                                    <h5>Hoisting Duration</h5>
                                    <div className="duration">
                                        <div className="circle"></div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="display-val">
                                        <h5>Overloading Counter</h5>
                                        <div className="val-txt">
                                            0
                                        </div>
                                    </div>
                                    <div className="display-val mt-3">
                                        <h5>Overspeeding Counter</h5>
                                        <div className="val-txt">
                                            0
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 right-side">
                        <div className="transformer row">
                            <div className="col-6 transformer1">
                                <div className="primary">
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                                <div className="secondary">
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                </div>                            
                            </div>
                            <div className="col-6 transformer2">
                                <div className="primary">
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                </div>
                                <div className="secondary">
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                    <input type="text" />
                                </div>       
                            </div>
                        </div>
                        <input className="low-trolley" type="text" />
                        <input className="up-trolley" type="text" />
                        <input className="fix-Gantry" type="text" />
                        <input className="hing-Gantry" type="text" />
                        <input className="hing-Gantry-bottom" type="text" />
                        <input className="hing-Gantry-top" type="text" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default NewHome;
