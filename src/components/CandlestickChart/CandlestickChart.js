import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Chart from 'react-apexcharts';

function CandlestickChart({ stockFrequency, stockName }) {
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true); // State to manage loading status

    useEffect(() => {
        axios.get(`http://76.154.163.8:3001/stockdata?frequency=${stockFrequency}`)
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
                setLoading(false); // Set loading to false once data is received
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
                setLoading(false); // Set loading to false even if there is an error
            });
    }, [stockFrequency]);

    const options = {
        chart: {
            background: '#1f2937', // Dark background color
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
                formatter: function (value) {
                    return Math.round(value); // Format y-axis labels as integers
                },
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
        <div id="chart" className='font-extralight bg-graph-background mx-1 py-1 md:px-4 w-full'>
            {loading ? (
                <p>Loading...</p> // Display loading message
            ) : (
                <Chart options={options} series={series} type="candlestick" height={450} />
            )}
        </div>
    );
};

export default CandlestickChart;
