import { createContext, useContext } from 'react';

const UserContext = createContext({ name: "Guest" });

const DemoUseContext: React.FC = () => {
    const user = useContext(UserContext);

    return <div>Welcome, {user.name}</div>;
};

const AppWrapper: React.FC = () => {
    return (
        <UserContext.Provider value={{ name: "John" }}>
            <DemoUseContext />
        </UserContext.Provider>
    );
};

export default AppWrapper;