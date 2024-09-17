function identity<T>(arg: T): T {
    return arg;
}

const DemoGenerics: React.FC = () => {
    const numberResult = identity<number>(10);
    const stringResult = identity<string>("Hello");

    return (
        <div>
            <p>Number: {numberResult}</p>
            <p>String: {stringResult}</p>
        </div>
    );
};

export default DemoGenerics;
