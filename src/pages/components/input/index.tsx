const type1 = 'w-11/12 md:w-72 inline-block px-6 py-3 border-2 border-gray-800 text-white font-bold text-xs leading-tight hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-2';
const type2 = '';

export default function Input({ type, className, onClick, placeholder }: any) {
    switch (className) {
        case 't1': className = type1; break;
        case 't2': className = type2; break;
        default: className = type1; break;
    }

    return (
        <>
            <input type={type} className={className} onClick={onClick} placeholder={placeholder} />
        </>
    )
}