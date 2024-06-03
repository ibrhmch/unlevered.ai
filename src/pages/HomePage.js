import { useState, useEffect } from "react";
import axios from "axios";
import StockOverview from "../components/StockOverview/StockOverview";
import CandlestickChart from "../components/CandlestickChart/CandlestickChart";

function HomePage() {
    const [stockFrequency, setStockFrequency] = useState('WEEKLY');
    const [stockName, setStockName] = useState('AAPL');

    const changeStockFrequency = (frequency) => {
        setStockFrequency(frequency);
    };

    // Dummy data for now
    const dummyStockData = {
        name: 'Apple Inc.',
        price: 145.09,
        change: -1.23,
        changePercent: -0.84
    };

    return (
        <div className="App min-h-screen text-gray-200">
            <StockOverview
                name={dummyStockData.name}
                price={dummyStockData.price}
                change={dummyStockData.change}
                changePercent={dummyStockData.changePercent}
            />
            <div className="pt-2 pb-2">
                <div className="flex justify-center mb-6">
                    <button
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mx-2"
                        onClick={() => changeStockFrequency('DAILY')}
                    >
                        Daily
                    </button>
                    <button
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mx-2"
                        onClick={() => changeStockFrequency('WEEKLY')}
                    >
                        Weekly
                    </button>
                    <button
                        className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded mx-2"
                        onClick={() => changeStockFrequency('MONTHLY')}
                    >
                        Monthly
                    </button>
                </div>
                <div className="flex justify-center max-w-full">
                    <CandlestickChart stockFrequency={stockFrequency} stockName={stockName} />
                </div>
            </div>
        </div>
    );
}

export default HomePage;