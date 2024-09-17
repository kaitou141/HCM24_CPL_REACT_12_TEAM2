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
        <div>
            <input ref={inputRef} type="text" placeholder="Focus me!" />
            <button onClick={focusInput}>Focus Input</button>
                   
        </div>
        
    );
};

export default DemoUseRef;