enum Status {
    Active,
    Inactive,
    Pending,
}

const DemoEnum: React.FC = () => {
    const status: Status = Status.Inactive;

    return (
        <div className="p-6 bg-gradient-to-r from-gray-400 to-yellow-100 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-white mb-4">Status Display</h2>
            <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-md p-4">
                <span className="text-lg font-semibold text-white">
                    Status: {status === Status.Inactive ? "Active" : "Not Active"}
                </span>
            </div>
        </div>
    );
};

export default DemoEnum;
