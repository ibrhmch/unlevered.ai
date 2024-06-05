import React from 'react';

function KeyRatios({ stockKeyRatios }) {
    const keyStyling = 'px-2 p-1';
    const valueStyling = 'font-thin italic px-2 py-1';

    const conditionalKeys = [
        "Sales Surprise", "SMA20", "PEG", "P/B", "Debt/Eq", "LT Debt/Eq", "EPS Surprise",
        "SMA50", "Sales Y/Y TTM", "Sales Q/Q", "SMA200", "ROA", "ROE", "ROI",
        "Oper. Margin", "Profit Margin", "52W High", "52W Low", "Perf Week",
        "Perf Month", "Perf Quarter", "Perf Half Y", "Perf Year", "Perf YTD",
        "Target Price", "Change"
    ];

    const getClassNameForValue = (key, value) => {
        if (conditionalKeys.includes(key)) {
            let numericValue;
            if (typeof value === 'string' && value.includes('%')) {
                numericValue = parseFloat(value.replace('%', ''));
            } else {
                numericValue = parseFloat(value);
            }

            if (!isNaN(numericValue)) {
                return numericValue >= 0 ? 'text-unlevered-green' : 'text-unlevered-red';
            }
        }
        return '';
    };

    const renderTableRows = () => {
        const entries = Object.entries(stockKeyRatios);
        const rows = [];

        for (let i = 0; i < entries.length; i += 6) {
            rows.push(
                <tr key={i} className="border-y border-gray-700">
                    {entries[i] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i][0]}</td>
                            <td className={`${valueStyling} ${getClassNameForValue(entries[i][0], entries[i][1])}`}>{entries[i][1]}</td>
                        </>
                    )}
                    {entries[i + 1] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 1][0]}</td>
                            <td className={`${valueStyling} ${getClassNameForValue(entries[i + 1][0], entries[i + 1][1])}`}>{entries[i + 1][1]}</td>
                        </>
                    )}
                    {entries[i + 2] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 2][0]}</td>
                            <td className={`${valueStyling} ${getClassNameForValue(entries[i + 2][0], entries[i + 2][1])}`}>{entries[i + 2][1]}</td>
                        </>
                    )}
                    {entries[i + 3] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 3][0]}</td>
                            <td className={`${valueStyling} ${getClassNameForValue(entries[i + 3][0], entries[i + 3][1])}`}>{entries[i + 3][1]}</td>
                        </>
                    )}
                    {entries[i + 4] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 4][0]}</td>
                            <td className={`${valueStyling} ${getClassNameForValue(entries[i + 4][0], entries[i + 4][1])}`}>{entries[i + 4][1]}</td>
                        </>
                    )}
                    {entries[i + 5] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 5][0]}</td>
                            <td className={`${valueStyling} ${getClassNameForValue(entries[i + 5][0], entries[i + 5][1])}`}>{entries[i + 5][1]}</td>
                        </>
                    )}
                </tr>
            );
        }

        return rows;
    };

    return (
        <div className="p-1 bg-gray-800 border rounded-md border-transparent">
            <div className="flex items-center justify-center border-b border-gray-700">
                <h2 className="text-md font-medium mb-2">Key Ratios</h2>
            </div>
            <table className="">
                <tbody className="">
                    {renderTableRows()}
                </tbody>
            </table>
        </div>
    );
}

export default KeyRatios;
