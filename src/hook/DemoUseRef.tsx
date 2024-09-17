import React from 'react'
interface CounterTracker {
  increment: number;
  decrement: number;
}

const DemoUseRef = () => {
  const [count, setCount] = React.useState<number>(0);

  const ref = React.useRef<CounterTracker>({
    increment: 0,
    decrement: 0,
  });

  const handleIncrement = () => {
    ref.current.increment++;
    setCount(count + 1);
    console.log('Increment button clicked');
    console.log('ref.current.increment:', ref.current.increment);
    console.log('Current count:', count + 1);
  };

  const handleDecrement = () => {
    ref.current.decrement++;
    setCount(count - 1);
    console.log('Decrement button clicked');
    console.log('ref.current.decrement:', ref.current.decrement);
    console.log('Current count:', count - 1);
  };

  // Log the current state and ref values on each render
  console.log('Component render');
  console.log('ref.current.increment:', ref.current.increment);
  console.log('ref.current.decrement:', ref.current.decrement);
  console.log('Current count (render):', count);

  return (
    <div className="max-w-md mx-auto p-8 bg-gradient-to-r from-gray-400 to-yellow-200 rounded-xl shadow-2xl">
      <div className="flex justify-center space-x-4 mb-6">
        <button 
          onClick={handleIncrement}
          className="px-6 py-3 bg-emerald-500 text-white font-bold rounded-full hover:bg-emerald-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50"
        >
          +
        </button>
        <button 
          onClick={handleDecrement}
          className="px-6 py-3 bg-rose-500 text-white font-bold rounded-full hover:bg-rose-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:ring-opacity-50"
        >
          -
        </button>
      </div>
      <div className="text-4xl font-extrabold text-center text-white mb-6">
        Count: {count}
      </div>

      <div className="text-xl text-white text-center mb-4">
        Buttons clicked {ref.current.increment + ref.current.decrement} times
      </div>

      <div className="flex justify-between">
        <div className="text-lg text-white">
          Increment: <span className="font-semibold">{ref.current.increment}</span>
        </div>
        <div className="text-lg text-white">
          Decrement: <span className="font-semibold">{ref.current.decrement}</span>
        </div>
      </div>
    </div>
  );
};

export default DemoUseRef;