enum Status {
    Active,
    Inactive,
    Pending,
}

const DemoEnum: React.FC = () => {
    const status: Status = Status.Inactive;

    return (
        <div>
            Status: {status === Status.Inactive ? "Active" : "Not Active"}
        </div>
    );
};

export default DemoEnum;
