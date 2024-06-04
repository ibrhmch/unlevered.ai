function AnalystEstimates({ stockAnalystEstimates }) {
    const keyStyling = 'px-2 p-1';
    const valueStyling = 'font-extralight italic px-2 py-1';

    return (
        <div className="p-1 bg-gray-800 border rounded-md border-transparent">
            <div className="flex items-center justify-center border-b border-gray-700">
                <h2 className="text-md font-medium text-white mb-2">Analyst Estimates</h2>
            </div>
            <table className="text-xs">
                <thead>
                    <tr>
                        <th className={`${keyStyling}`}>Date</th>
                        <th className={`${keyStyling}`}>Action</th>
                        <th className={`${keyStyling}`}>Analyst</th>
                        <th className={`${keyStyling}`}>Rating Change</th>
                        <th className={`${keyStyling}`}>Price Target Change</th>
                    </tr>
                </thead>
                <tbody className="text-xs">
                    {stockAnalystEstimates.map((estimate, index) => (
                        <tr key={index} className="border-y border-gray-700">
                            <td className={`${valueStyling}`}>{estimate.Date}</td>
                            <td className={`${valueStyling} ${estimate.Action == "Downgrade" ? 'text-unlevered-red' : estimate.Action == "Upgrade" ? "text-unlevered-green" : ""}`}>{estimate.Action}</td>
                            <td className={`${valueStyling} ${estimate.Action == "Downgrade" ? 'text-unlevered-red' : estimate.Action == "Upgrade" ? "text-unlevered-green" : ""}`}>{estimate.Analyst}</td>
                            <td className={`${valueStyling} ${estimate.Action == "Downgrade" ? 'text-unlevered-red' : estimate.Action == "Upgrade" ? "text-unlevered-green" : ""}`}>{estimate['Rating Change']}</td>
                            <td className={`${valueStyling} ${estimate.Action == "Downgrade" ? 'text-unlevered-red' : estimate.Action == "Upgrade" ? "text-unlevered-green" : ""}`}>{estimate['Price Target Change']}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AnalystEstimates;