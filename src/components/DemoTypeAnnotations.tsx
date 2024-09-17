const add = (a: number, b: number): number => {
    return a + b;
};

const DemoTypeAnnotations: React.FC = () => {
    const result = add(5, 7);
    return <div>Sum: {result}</div>;
};

export default DemoTypeAnnotations;
