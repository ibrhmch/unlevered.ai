import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

function CandlestickChart({ stockFrequency, stockName }) {
    const [chartData, setChartData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/stockdata?frequency=${stockFrequency}`)
            .then((response) => {
                const data = response.data[`Time Series (${stockFrequency})`];
                const formattedData = Object.keys(data).map(date => ({
                    x: new Date(date),
                    y: [
                        parseFloat(data[date]['1. open']),
                        parseFloat(data[date]['2. high']),
                        parseFloat(data[date]['3. low']),
                        parseFloat(data[date]['4. close']),
                    ]
                }));
                setChartData(formattedData);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });
    }, [stockFrequency]);

    const options = {
        chart: {
            background: '#1e1e1e', // Dark background color
            foreColor: '#f0f0f0' // Light text color
        },
        title: {
            text: `${stockName} Stock Price`,
            align: 'left',
            style: {
                color: '#f0f0f0' // Light text color for title
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    colors: '#f0f0f0' // Light text color for x-axis labels
                }
            }
        },
        yaxis: {
            tooltip: {
                enabled: true
            },
            labels: {
                style: {
                    colors: '#f0f0f0' // Light text color for y-axis labels
                }
            }
        },
        grid: {
            borderColor: '#555' // Darker grid lines
        },
        plotOptions: {
            candlestick: {
                colors: {
                    upward: '#00ffc0', // Green for upward candles
                    downward: '#ff5959' // Red for downward candles
                }
            }
        }
    };

    const series = [{
        data: chartData
    }];

    return (
        <div id="chart" className='font-extralight bg-slate-100 w-3/4'>
            <Chart options={options} series={series} type="candlestick" height={450} />
        </div>
    );
};

export default CandlestickChart;
