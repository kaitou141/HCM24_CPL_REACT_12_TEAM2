// // src/components/HookDemos/UseCallbackDemo.tsx
// import { useCallback, useState } from 'react';

// const DemoUseCallback: React.FC = () => {
//     const [count, setCount] = useState(0);

//     const increment = useCallback(() => {
//         setCount(count + 1);
//     }, [count]);

//     return (
//         <div>
//             <p>Count: {count}</p>
//             <button onClick={increment}>Increment</button>
//         </div>
//     );
// };

// export default DemoUseCallback;
// src/components/HookDemos/UseCallbackFilterDemo.tsx
import React, { useCallback, useState } from 'react';

interface Item {
    id: number;
    name: string;
}

const DemoUseCallback: React.FC = () => {
    const [items] = useState<Item[]>([
        { id: 1, name: 'Apple' },
        { id: 2, name: 'Banana' },
        { id: 3, name: 'Orange' },
        { id: 4, name: 'Pineapple' },
        { id: 5, name: 'Strawberry' },
    ]);
    const [query, setQuery] = useState('');

    const filteredItems = useCallback(() => {
        return items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
    }, [items, query]);

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search items..."
            />
            <ul>
                {filteredItems().map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default DemoUseCallback;
