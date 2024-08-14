



function Button({children,onClick}) {
    return (
        <button onClick={onClick} className="bg-orange-500 hover:bg-orange-300 text-black font-sans font-bold text-sm rounded-md px-14 py-3 flex items-center space-x-2">
                    {children}
                </button>
    )
}

export default Button
