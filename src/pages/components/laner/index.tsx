import Image from 'next/image';

export default function LaneR({ id, heading, titling, content, imaging, altimage, children }: any) {
    return (
        <>
            <section id={id}>
                <div className='flex justify-center mx-auto bg-white shadow-md overflow-hidden md:max-w-100 pt-20'>
                    <div className='md:flex w-100'>
                        <div className='mb-8 text-center self-center md:pr-40'>
                            <h1 className='uppercase tracking-wide text-gray-900 text-4xl font-bold mb-10'>{heading}</h1>
                            <h2 className='text-gray-700 text-2xl font-bold mb-10'>{titling}</h2>
                            <p className='mt-2 text-gray-600 text-2xs'>{content}</p>
                            <div className='mt-6 self-center'>{children}</div>
                        </div>
                        <div className='md:shrink-0 md:mr-0'>
                            <Image className='object-cover md:h-full md:w-48 self-center' src={imaging} alt={altimage} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}