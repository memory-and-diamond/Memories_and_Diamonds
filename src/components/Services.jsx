import { Link } from "react-router-dom";

const Services = () => {

    return (
        <>
            <div className="container mx-auto py-32 bg-white shadow-md rounded-md text-center">
                <div className="adv bg-gray-800 text-white w-32 h-32 rounded-full flex justify-center items-center text-4xl mx-auto mb-8">
                    🚧
                </div>
                <h1 className="text-gray-800 text-3xl font-bold mb-4">Under development</h1>
                <p className="text-gray-600 text-xl mb-8">
                    We are working on something awesome for you. Stay tuned!
                </p>
                <Link to="/" className=" bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700">
                    Back to the homepage
                </Link>
            </div>
        </>
    );
};

export default Services;
