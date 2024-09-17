type Status = "Active" | "Inactive" | "Pending";

const DemoUnionTypes: React.FC = () => {
    const status: Status = "Pending";
    
    const getStatusColor = (status: Status): string => {
        switch (status) {
            case "Active": return "bg-green-500";
            case "Inactive": return "bg-red-500";
            case "Pending": return "bg-yellow-500";
        }
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-3xl font-bold mb-4 text-gray-800">Status Display</h2>
                <div className="flex items-center">
                    <span className="mr-2 text-lg text-gray-700">Current Status:</span>
                    <span className={`px-3 py-1 rounded-full text-white font-semibold ${getStatusColor(status)}`}>
                        {status}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default DemoUnionTypes;
