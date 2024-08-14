



function Content() {
    return (
        <div className="flex flex-col justify-center items-start p-6 rounded-lg w-full h-full">
            <h4 className=" text-sm uppercase font-bold font-sans text-stone-400 mb-6">Sneaker Company</h4>
            <h1 className="text-4xl font-bold font-sans text-gray-900 mb-4">Summer Limited Edition </h1>
            <h1 className="text-4xl font-bold font-sans text-gray-900 mb-4">Sneakers</h1>
            <p className="text-lg text-stone-400 font-sans font-semibold">
                Step into summer with style and comfort with our sneakers. 
                This Limited Edition combines modern aesthetics 
                with advanced technology to elevate your footwear game.
            </p>
            <div className="flex items-center space-x-4 mt-4">
                <span className="text-2xl font-bold text-black">$125.00</span>
                <span className="bg-black text-white text-sm px-2 py-1 rounded-md font-bold">50% </span>
                <span className="text-gray-500 line-through">$250.00</span>
            </div>
        </div>
    );
}

export default Content;

