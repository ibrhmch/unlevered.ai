function FrequencyButtons({ stockFrequency, changeStockFrequency }) {
    return (
        <>
            <button
                className={`hover:bg-unleveredpurple py-1 px-4 mx-2 rounded-md ${stockFrequency === 'DAILY' ? 'bg-gray-900 border border-unlevered-textpurple' : ''}`}
                onClick={() => changeStockFrequency('DAILY')}
            >
                Daily
            </button>
            <button
                className={`hover:unleveredpurple py-1 px-4 mx-2 rounded-md ${stockFrequency === 'WEEKLY' ? 'bg-gray-900 border border-unlevered-textpurple' : ''}`}
                onClick={() => changeStockFrequency('WEEKLY')}
            >
                Weekly
            </button>
            <button
                className={`hover:unleveredpurple py-1 px-4 mx-2 rounded-md ${stockFrequency === 'MONTHLY' ? 'bg-gray-900 border border-unlevered-textpurple' : ''}`}
                onClick={() => changeStockFrequency('MONTHLY')}
            >
                Monthly
            </button>
        </>
    );
}

export default FrequencyButtons;