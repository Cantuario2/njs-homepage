export default function SiteMap() {
    const defaultClass1 = 'mb-8 text-left md:pr-10';
    const defaultClass2 = 'text-black text-2xl font-medium mb-10';
    const defaultClass3 = 'mt-2 text-black text-2xs';

    return (
        <>
            <section>
                <div className='flex justify-center mx-auto bg-white text-black shadow-md overflow-hidden md:max-w-100 pt-20'>
                    <div className='md:flex w-100'>
                        <div className={defaultClass1}>
                            <h1 className={defaultClass2}>LOGO GOES HERE</h1>
                        </div>
                        <div className={defaultClass1}>
                            <h1 className={defaultClass2}>LOREM IPSUM</h1>
                            <p className={defaultClass3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className={defaultClass3}>Mi gravida ante purus mauris.</p>
                        </div>
                        <div className={defaultClass1}>
                            <h1 className={defaultClass2}>LOREM IPSUM</h1>
                            <p className={defaultClass3}>Lorem ipsum dolor</p>
                            <p className={defaultClass3}>Lorem ipsum dolor</p>
                        </div>
                        <div className={defaultClass1}>
                            <h1 className={defaultClass2}>LOREM IPSUM</h1>
                            <p className={defaultClass3}>Lorem</p>
                            <p className={defaultClass3}>Ipsum</p>
                            <p className={defaultClass3}>Dolor</p>
                            <p className={defaultClass3}>Lorem</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}