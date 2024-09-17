import { useState, useEffect } from 'react';

const DemoUseEffect: React.FC = () => {
    const [data, setData] = useState<string>("Loading...");

    useEffect(() => {
        setTimeout(() => {
            setData("Fetched Data");
        }, 2000);
    }, []);

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="p-6 bg-white rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Data Fetching Demo</h2>
                <p className="text-lg">{data}</p>
            </div>
        </div>
    );
};

export default DemoUseEffect;