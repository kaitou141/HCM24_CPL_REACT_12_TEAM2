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
        <div>
            <p>Person: {person.name}, Age: {person.age}</p>
            <p>Animal: {dog.species}, Legs: {dog.legs}</p>
        </div>
    );
};

export default DemoInterfaceType;
