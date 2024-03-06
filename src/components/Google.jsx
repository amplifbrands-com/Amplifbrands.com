export const Google = () => {
    return (
        <div className="flex justify-center space-x-20 bg-blue-50">
            
            <div className=" p-8">
                <h1 className="text-blue-400 text-3xl font-bold mb-4">Google Ads</h1>
                <p className="text-black mb-4 font-bold">
                    What we offer:
                </p>
                <ul className="list-disc pl-6 text-gray-800">
                    <li>Google Ads Campaign Setup</li>
                    <li>Keyword Research and Selection</li>
                    <li>Ad Copywriting and Ad Extensions</li>
                    <li>Bid Management and Optimization</li>
                    <li>Conversion Tracking and Measurement</li>
                </ul>
                <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-700">LEARN MORE</button>
            </div>

            {/* Right side - Image */}
            <div className="flex items-center justify-center">
                <img src="./src/assets/add/google_add.png" alt="Google Ads Image" className="max-w-full h-auto" />
            </div>
        </div>
    );
}
