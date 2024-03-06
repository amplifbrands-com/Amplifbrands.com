export const Platform = () => {
    return (
        <div className="flex justify-center bg-blue-50">
            {/* Left side */}
            <div className=" p-8">
                <h1 className="text-blue-400 text-3xl font-bold mb-4">Other Paid Advertising Platforms</h1>
                <p className="text-black mb-4 font-bold">
                    What we offer:
                </p>
                <ul className="list-disc pl-6 text-gray-800">
                    <li>Platform-Specific Campaign Setup</li>
                    <li> Ad Creative Development and Optimization</li>
                    <li>Audience Targeting and Segmentation</li>
                    <li>Bid Management and Budget Allocation</li>
                    <li>Performance Tracking and Reporting</li>
                </ul>
                <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-700">LEARN MORE</button>
            </div>

            {/* Right side - Image */}
            <div className=" flex items-center justify-center">
                <img src="./src/assets/add/other_add.png" alt="Google Ads Image" className="max-w-full h-auto" />
            </div>
        </div>
    );
}
