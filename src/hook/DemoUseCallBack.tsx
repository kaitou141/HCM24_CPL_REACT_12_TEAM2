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
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search items..."
                className="w-full px-4 py-2 mb-4 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ul className="space-y-2">
                {filteredItems().map(item => (
                    <li key={item.id} className="p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors duration-200">
                        <span className="text-lg font-semibold text-gray-800">{item.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default DemoUseCallback;
