export default function LaneC({ id, heading, titling, content, children }: any) {
    return (
        <>
            <section id={id}>
                <div className='flex justify-center mx-auto bg-black shadow-md overflow-hidden md:max-w-100 pt-20'>
                    <div className='md:flex w-100 md:h-96'>
                        <div className='mb-8 text-center self-center md:p-60'>
                            <h1 className='uppercase tracking-wide text-white text-4xl font-bold mb-10'>{heading}</h1>
                            <h2 className='text-white text-2xl font-bold mb-10'>{titling}</h2>
                            <p className='mt-2 text-white text-2xs'>{content}</p>
                            <div className='mt-6 self-center'>{children}</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}