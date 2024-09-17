import { createContext, useContext } from 'react';

const UserContext = createContext({ name: "Guest" });

const DemoUseContext: React.FC = () => {
    const user = useContext(UserContext);

    return (
        <div className="flex flex-grow items-center justify-center bg-gradient-to-r from-gray-400 to-yellow-100 p-8 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-extrabold text-white mb-4 mr-3">Welcome</h2>
            <span className="text-2xl text-blue-400 font-semibold mb-2">{user.name}</span>
        </div>
    );
};

const AppWrapper: React.FC = () => {
    return (
        <UserContext.Provider value={{ name: "John" }}>
            <DemoUseContext />
        </UserContext.Provider>
    );
};

export default AppWrapper;