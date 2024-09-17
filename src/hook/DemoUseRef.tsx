// src/components/HookDemos/UseRefDemo.tsx
import { useRef } from 'react';

const DemoUseRef: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const focusInput = () => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    console.log(focusInput);  
    return (
        <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-gradient-to-r from-gray-400 to-yellow-100 rounded-lg shadow-lg">
            <input
                ref={inputRef}
                type="text"
                placeholder="Focus me!"
                className="w-full px-4 py-2 text-lg text-gray-700 bg-white border-2 border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300 ease-in-out"
            />
            <button
                onClick={focusInput}
                className="px-6 py-2 text-lg font-semibold text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Focus Input
            </button>     
        </div>
        
    );
};

export default DemoUseRef;