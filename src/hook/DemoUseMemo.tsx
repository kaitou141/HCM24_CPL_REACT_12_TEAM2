// src/components/HookDemos/UseMemoDemo.tsx
import { useMemo, useState } from 'react';

const DemoUseMemo: React.FC = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = (num: number) => {
        console.log("Calculating...");
        return num * 2;
    };

    const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

    return (
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-400 to-yellow-100 rounded-lg shadow-2xl">
            <p className="text-3xl font-bold text-white mb-4">Count: {count}</p>
            <p className="text-2xl font-semibold text-yellow-300 mb-6">Memoized Value: {memoizedValue}</p>
            <button 
                onClick={() => setCount(count + 1)}
                className="px-6 py-3 bg-white text-purple-600 font-bold rounded-full shadow-md hover:bg-purple-100 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Increment
            </button>
        </div>
    );
};
export default DemoUseMemo;