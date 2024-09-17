import { useState } from 'react';

interface CounterProps {
    initialValue: number;
}

const DemoUseState: React.FC<CounterProps> = ({ initialValue }) => {
    const [count, setCount] = useState(initialValue);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default DemoUseState;