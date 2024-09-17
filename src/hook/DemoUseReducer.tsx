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
        <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-gray-400 to-yellow-100 rounded-lg shadow-lg">
            <p className="text-3xl font-bold text-white mb-6">Count: {count}</p>
            <div className="space-x-4">
                <button 
                    onClick={() => dispatch('increment')}
                    className="px-6 py-2 bg-white text-purple-600 font-semibold rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                >
                    Increment
                </button>
                <button 
                    onClick={() => dispatch('decrement')}
                    className="px-6 py-2 bg-white text-pink-600 font-semibold rounded-full hover:bg-opacity-90 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};
export default DemoUseReducer;