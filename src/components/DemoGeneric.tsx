function identity<T>(arg: T): T {
    return arg;
}

const DemoGenerics: React.FC = () => {
    const numberResult = identity<number>(10);
    const stringResult = identity<string>("Hello");

    return (
        <div className="bg-gradient-to-r from-gray-400 to-yellow-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Generic Function Demo</h2>
            <div className="space-y-4">
                <p className="text-xl text-white">Number: <span className="font-semibold">{numberResult}</span></p>
                <p className="text-xl text-white">String: <span className="font-semibold">"{stringResult}"</span></p>
            </div>
        </div>
    );
};

export default DemoGenerics;
