function StatsTable({ stockFinacialReports }) {
    const keyStyling = 'px-2 py-2 border border-gray-800';
    const valueStyling = 'font-thin italic px-2 border py-2 border-gray-800';

    const renderTableRows = () => {
        const entries = Object.entries(stockFinacialReports);
        const rows = [];

        for (let i = 0; i < entries.length; i += 6) {
            rows.push(
                <tr key={i}>
                    {entries[i] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i][0]}</td>
                            <td className={`${valueStyling}`}>{entries[i][1]}</td>
                        </>
                    )}
                    {entries[i + 1] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 1][0]}</td>
                            <td className={`${valueStyling}`}>{entries[i + 1][1]}</td>
                        </>
                    )}
                    {entries[i + 2] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 2][0]}</td>
                            <td className={`${valueStyling}`}>{entries[i + 2][1]}</td>
                        </>
                    )}
                    {entries[i + 3] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 3][0]}</td>
                            <td className={`${valueStyling}`}>{entries[i + 3][1]}</td>
                        </>
                    )}
                    {entries[i + 4] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 4][0]}</td>
                            <td className={`${valueStyling}`}>{entries[i + 4][1]}</td>
                        </>
                    )}
                    {entries[i + 5] && (
                        <>
                            <td className={`${keyStyling}`}>{entries[i + 5][0]}</td>
                            <td className={`${valueStyling}`}>{entries[i + 5][1]}</td>
                        </>
                    )}
                </tr>
            );
        }

        return rows;
    };

    return (
        <table className="min-w-full bg-graph-background text-xs">
            <tbody className="text-xs">
                {renderTableRows()}
            </tbody>
        </table>
    );
}

export default StatsTable;