function StockQuickInfo({ price, change, changePercent }) {
    return (
        <div className="flex-1 text-right">
            <p className="text-xl">Price: ${price}</p>
            <p className={`text-xl ${change >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                {change >= 0 ? '+' : ''}{change} ({changePercent}%)
            </p>
        </div>
    );
}

export default StockQuickInfo;