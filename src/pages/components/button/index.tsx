const type1 = 'w-36 inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-bold text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-1';
const type2 = 'w-36 inline-block px-6 py-2 border-2 border-white text-green-800 bg-white font-bold text-xs leading-tight uppercase rounded hover:bg-white hover:text-white hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-1';
const type3 = 'w-36 inline-block px-6 py-2 border-2 border-gray-400 text-white bg-gray-400 font-bold text-xs leading-tight uppercase rounded hover:bg-white hover:text-gray-400 hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-1';

export default function Button({ type, className, onClick, text }: any) {
    switch(className) {
        case 't1': className = type1; break;
        case 't2': className = type2; break;
        case 't3': className = type3; break;
        default: className = type1; break;
    }

    return (
        <>
            <button type={type} className={className} onClick={onClick} >{text} </button>
        </>
    )
}