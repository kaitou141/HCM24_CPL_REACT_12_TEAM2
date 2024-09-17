type Status = "Active" | "Inactive" | "Pending";

const DemoUnionTypes: React.FC = () => {
    const status: Status = "Inactive";
    return <div>Status: {status}</div>;
};
export default DemoUnionTypes;
