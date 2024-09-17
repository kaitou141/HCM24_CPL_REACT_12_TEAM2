const add = (a: number, b: number): number => {
    return a + b;
};

const DemoTypeAnnotations: React.FC = () => {
    const result = add(5, 7);
    return (
        <div className="bg-gradient-to-r from-gray-400 to-yellow-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Type Annotations</h2>
            <div className="text-xl text-white">Sum: <span className="font-semibold">{result}</span></div>
        </div>
    );
};

export default DemoTypeAnnotations;
