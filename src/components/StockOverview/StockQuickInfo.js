function StockQuickInfo({ price, change, changePercent }) {
    return (
        <div className="flex-1 text-right font-medium">
            <p className="text-lg">Price: ${price}</p>
            <p className={`text-xl ${change >= 0 ? 'text-unlevered-green' : 'text-unlevered-red'}`}>
                {change >= 0 ? '+' : ''}{change} ({changePercent}%)
            </p>
        </div>
    );
}

export default StockQuickInfo;