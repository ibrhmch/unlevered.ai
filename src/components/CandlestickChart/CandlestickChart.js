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
            background: '#353945', // Dark background color
            foreColor: '#f0f0f0', // Light text color
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
        },
        tooltip: {
            theme: 'dark', // Dark theme for tooltip
            style: {
                fontSize: '12px',
                fontFamily: undefined
            },
            onDatasetHover: {
                highlightDataSeries: true,
            },
            y: {
                formatter: undefined,
                title: {
                    formatter: (seriesName) => seriesName,
                    style: {
                        color: '#f0f0f0' // Light text color for tooltip title
                    }
                }
            },
            x: {
                formatter: (value, { series, seriesIndex, dataPointIndex, w }) => {
                    return new Date(value).toDateString(); // Format date if needed
                },
                style: {
                    color: '#f0f0f0' // Light text color for tooltip x-axis
                }
            },
            marker: {
                show: true,
            },
        }
    };

    const series = [{
        data: chartData
    }];

    return (
        <div id="chart" className='font-extralight p-4 w-full md:w-10/12'>
            <Chart options={options} series={series} type="candlestick" height={450} />
        </div>
    );
};

export default CandlestickChart;
