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
        <div className="App min-h-screen text-gray-300 font-light mt-20 w-full">
            <StockOverview
                name={dummyStockData.name}
                price={dummyStockData.price}
                change={dummyStockData.change}
                changePercent={dummyStockData.changePercent}
            />
            <div className="pt-2 pb-2 text-sm">
                <div className="flex justify-center mb-6">
                    <button
                        className={`hover:bg-gray-800 py-2 px-4 mx-2 rounded-md ${stockFrequency === 'DAILY' ? 'bg-gray-900 border border-unlevered-textpurple' : ''}`}
                        onClick={() => changeStockFrequency('DAILY')}
                    >
                        Daily
                    </button>
                    <button
                        className={`hover:bg-gray-800 py-2 px-4 mx-2 rounded-md ${stockFrequency === 'WEEKLY' ? 'bg-gray-900 border border-unlevered-textpurple' : ''}`}
                        onClick={() => changeStockFrequency('WEEKLY')}
                    >
                        Weekly
                    </button>
                    <button
                        className={`hover:bg-gray-800 py-2 px-4 mx-2 rounded-md ${stockFrequency === 'MONTHLY' ? 'bg-gray-900 border border-unlevered-textpurple' : ''}`}
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