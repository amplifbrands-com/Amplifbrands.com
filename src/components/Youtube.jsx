export const Youtube = () => {
    return (
        <div className="flex bg-white">
            {/* Right side - Image */}
            <div className="w-1/2 flex items-center justify-center">
                <img src="./src/assets/add/youtube.png" alt="Google Ads Image" className="max-w-full h-auto" />
            </div>
           
           
            {/* Left side */}
            <div className="w-1/2 p-8">
                <h1 className="text-blue-400 text-3xl font-bold mb-4">YouTube Ads</h1>
                <p className="text-black mb-4 font-bold">
                    What we offer:
                </p>
                <ul className="list-disc pl-6 text-gray-800">
                    <li>YouTube Ads Campaign Creation</li>
                    <li>Video Ad Production and Optimization</li>

                    <li>Targeting Options and Audience Segmentation</li>

                    <li>TrueView and Bumper Ads Management</li>

                    <li>Performance Analysis and Reporting</li>

                </ul>
                <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-700">LEARN MORE</button>
            </div>

           
        </div>
    );
}

