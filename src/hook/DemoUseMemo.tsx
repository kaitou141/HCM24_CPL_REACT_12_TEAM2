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
        <div>
            <p>Count: {count}</p>
            <p>Memoized Value: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};
export default DemoUseMemo;