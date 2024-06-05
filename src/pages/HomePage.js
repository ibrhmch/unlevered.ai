import { useState, useEffect } from "react";
import axios from "axios";
import StockOverview from "../components/StockOverview/StockOverview";
import CandlestickChart from "../components/CandlestickChart/CandlestickChart";
import FrequencyButtons from "../components/CandlestickChart/FrequencyButtons";
import KeyRatios from "../components/Tables/KeyRatios";
import AnalystEstimates from "../components/Tables/AnalystEstimates";

function HomePage() {
    const [stockFrequency, setStockFrequency] = useState('WEEKLY');
    const [stockName, setStockName] = useState('AAPL');
    const [stockKeyRatios, setStockKeyRatios] = useState({});
    const [stockAnalystEstimates, setstockAnalystEstimates] = useState([]);

    const changeStockFrequency = (frequency) => {
        setStockFrequency(frequency);
    };

    useEffect(() => {
        axios.get('http://76.154.163.8:3001/financials')
            .then((response) => {
                setStockKeyRatios(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });

        axios.get('http://76.154.163.8:3001/forecasts')
            .then((response) => {
                setstockAnalystEstimates(response.data);
            })
            .catch((error) => {
                console.error('Error fetching data: ', error);
            });

    }, [stockFrequency]);

    useEffect(() => {
        const handleTouchStart = (e) => {
            e.preventDefault();
            document.body.classList.add('no-scroll');
            document.body.classList.add('no-select');
        };

        const handleTouchEnd = (e) => {
            e.preventDefault();
            document.body.classList.remove('no-scroll');
            document.body.classList.remove('no-select');
        };

        const parentDiv = document.getElementById('chart-container');
        parentDiv.addEventListener('touchstart', handleTouchStart);
        parentDiv.addEventListener('touchend', handleTouchEnd);

        return () => {
            parentDiv.removeEventListener('touchstart', handleTouchStart);
            parentDiv.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    // Dummy data for now
    const dummyStockData = {
        name: 'Apple Inc.',
        price: 145.09,
        change: -1.23,
        changePercent: -0.84
    };

    return (
        <div className="m-auto min-h-screen text-gray-300 font-light mt-20 w-fit">
            <StockOverview
                name={dummyStockData.name}
                price={dummyStockData.price}
                change={dummyStockData.change}
                changePercent={dummyStockData.changePercent}
            />
            <div className="pt-2 pb-2 flex justify-center text-sm">
                <div className="flex flex-col py-4 w-full mx-1 lg:w-10/12 rounded-md bg-graph-background">
                    <div className="flex justify-center mb-6">
                        <FrequencyButtons stockFrequency={stockFrequency} changeStockFrequency={changeStockFrequency} />
                    </div>
                    <div className="flex justify-center" id="chart-container">
                        <CandlestickChart stockFrequency={stockFrequency} stockName={stockName} />
                    </div>
                </div>
            </div>
            <div className="pt-2 pb-2 flex justify-center text-xs">
                <div className="flex justify-center items-center">
                    <KeyRatios stockKeyRatios={stockKeyRatios} />
                </div>
            </div>
            <div className="pt-2 pb-2 flex justify-center text-sm">
                <div className="w-full lg:w-4/6 flex justify-center items-center">
                    <AnalystEstimates stockAnalystEstimates={stockAnalystEstimates} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
