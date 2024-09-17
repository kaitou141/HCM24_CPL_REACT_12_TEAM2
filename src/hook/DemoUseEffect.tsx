import { useState, useEffect } from 'react';

const DemoUseEffect: React.FC = () => {
    const [data, setData] = useState<string>("Loading...");

    useEffect(() => {
        setTimeout(() => {
            setData("Fetched Data");
        }, 2000);
    }, []);

    return <div>{data}</div>;
};
export default DemoUseEffect;