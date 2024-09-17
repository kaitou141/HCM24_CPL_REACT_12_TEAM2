import React,{useState} from "react";
const add = (a: number, b: number): number => {
    return a + b;
};

const DemoTypeAnnotations: React.FC = () => {
    const [num1, setNum1] = useState<number>(0);
    const [num2, setNum2] = useState<number>(0);
    const result = add(num1,num2);
    return (
        <div className="bg-gradient-to-r from-gray-400 to-yellow-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-4">Type Annotations</h2>
            <div className="mb-4">
                <label className="block text-white mb-2">Enter First Number:</label>
                <input
                    type="number"
                    value={num1}
                    onChange={(e) => setNum1(parseFloat(e.target.value))}
                    className="p-2 rounded-lg"
                />
            </div>
            <div className="mb-4">
                <label className="block text-white mb-2">Enter Second Number:</label>
                <input
                    type="number"
                    value={num2}
                    onChange={(e) => setNum2(parseFloat(e.target.value))}
                    className="p-2 rounded-lg"
                />
            </div>
            <div className="text-xl text-white">
                Sum: <span className="font-semibold">{result}</span>
            </div>
        </div>
    );
};

export default DemoTypeAnnotations;
