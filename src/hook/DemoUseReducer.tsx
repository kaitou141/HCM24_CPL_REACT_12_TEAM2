import { useReducer } from 'react';

const reducer = (state: number, action: 'increment' | 'decrement'): number => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
};

const DemoUseReducer: React.FC = () => {
    const [count, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    );
};
export default DemoUseReducer;