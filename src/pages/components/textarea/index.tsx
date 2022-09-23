const type1 = 'resize-y w-11/12 md:w-10/12 inline-block px-6 py-2 border-2 border-gray-800 text-white font-bold text-xs leading-tight hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out m-1';
const type2 = '';

export default function TextArea({ className, onClick, placeholder }: any) {
    switch (className) {
        case 't1': className = type1; break;
        case 't2': className = type2; break;
        default: className = type1; break;
    }

    return (
        <>
            <textarea className={className} onClick={onClick} placeholder={placeholder} rows={5} />
        </>
    )
}