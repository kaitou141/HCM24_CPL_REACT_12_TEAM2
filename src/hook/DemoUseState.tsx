import { useState } from 'react';

interface CounterProps {
    initialValue: number;
}

const DemoUseState: React.FC<CounterProps> = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue);

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-400 to-yellow-100 rounded-lg shadow-lg">
            <p className="text-3xl font-bold text-white mb-4">Count: {count}</p>
            <button 
                onClick={() => setCount(count + 1)}
                className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full shadow-md hover:bg-purple-100 transition duration-300 ease-in-out"
            >
                Increment
            </button>
        </div>
    );
};

export default DemoUseState;