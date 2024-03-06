export const Linkendin = () => {
    return (
        <div className="flex justify-center bg-blue-50">
            {/* Left side */}
            <div className=" p-8">
                <h1 className="text-blue-400 text-3xl font-bold mb-4">Linkendln Ads</h1>
                <p className="text-black mb-4 font-bold">
                    What we offer:
                </p>
                <ul className="list-disc pl-6 text-gray-800">
                    <li>Linkendln Ads Campaign Setup</li>
                    <li> Tagged Audience Selection</li>
                    <li>Ad Creative Devlopment</li>
                    <li>Sponsored Content and lnMail Ads</li>
                    <li>Bidding Strategy and Budget Management</li>
                </ul>
                <button className="mt-4 bg-yellow-600 text-white px-4 py-2 rounded hover:bg-blue-700">LEARN MORE</button>
            </div>

            {/* Right side - Image */}
            <div className=" flex items-center justify-center">
                <img src="./src/assets/add/linkendin_add.png" alt="Google Ads Image" className="max-w-full h-auto" />
            </div>
        </div>
    );
}
