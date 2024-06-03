import StockName from './StockName';
import StockQuickInfo from './StockQuickInfo';

function StockOverview({ name, price, change, changePercent }) {
    return (
        <div className="flex justify-between items-center bg-gray-700 p-4 mt-2 mb-4">
            <StockName name={name} />
            <StockQuickInfo price={price} change={change} changePercent={changePercent} />
        </div>
    );
}

export default StockOverview;