// Interface Example
interface Person {
    name: string;
    age: number;
}

// Type Example
type Animal = {
    species: string;
    legs: number;
};

const person: Person = { name: "John", age: 30 };
const dog: Animal = { species: "Dog", legs: 4 };

const DemoInterfaceType: React.FC = () => {
    return (
        <div className="bg-gradient-to-r from-gray-400 to-yellow-100 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-white mb-6">Interface and Type</h2>
            <div className="space-y-4">
                <p className="text-xl text-white">
                    <span className="font-semibold">Person:</span> {person.name}, <span className="font-semibold">Age:</span> {person.age}
                </p>
                <p className="text-xl text-white">
                    <span className="font-semibold">Animal:</span> {dog.species}, <span className="font-semibold">Legs:</span> {dog.legs}
                </p>
            </div>
        </div>
    );
};

export default DemoInterfaceType;
