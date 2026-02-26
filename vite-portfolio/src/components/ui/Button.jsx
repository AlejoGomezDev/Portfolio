

export function Button({
    className = "",
    onClick = () => {console.log("Click")},
    text = ""
}){

    return (

        <button 
        className={`bg-gray-600 text-white rounded-full p-2 w-30 h-10 transition-all duration-300 ease-in-out hover:-translate-y-1  cursor-pointer ${className}`}
        onClick={onClick}
        >
            {text}
        </button>
    )
}