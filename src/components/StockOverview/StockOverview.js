import StockName from './StockName';
import StockQuickInfo from './StockQuickInfo';

function StockOverview({ name, price, change, changePercent }) {
    return (
        <div className="flex justify-between items-center p-6 my-2">
            <StockName name={name} />
            <StockQuickInfo price={price} change={change} changePercent={changePercent} />
        </div>
    );
}

export default StockOverview;