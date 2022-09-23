import Button from '../button';
import Input from '../input';
import TextArea from '../textarea';

export default function Book({ id, heading, titling, content, imaging, altimage, children }: any) {
    return (
        <>
            <section id={id}>
                <div className='flex justify-center mx-auto bg-black shadow-md overflow-hidden md:max-w-100 pt-20'>
                    <div className='md:flex w-100'>
                        <div className='mb-8 text-center self-center md:pr-10'>
                            <h1 className='tracking-wide text-white text-4xl font-bold mb-10'>{heading}</h1>
                            <h2 className='text-white text-2xl font-medium mb-10'>{titling}</h2>
                            <p className='mt-2 text-white text-2xs'>{content}</p>
                        </div>
                        <div className='mb-8 text-center self-center md:pl-10'>
                            <Input type='text' className='t1' onChange={() => { }} placeholder='Your name' />
                            <Input type='text' className='t1' onChange={() => { }} placeholder='Your email' />
                            <Input type='text' className='t1' onChange={() => { }} placeholder='Phone number' />
                            <Input type='text' className='t1' onChange={() => { }} placeholder='Booking date' />
                            <Input type='text' className='t1' onChange={() => { }} placeholder='Time' />
                            <Input type='text' className='t1' onChange={() => { }} placeholder='Party Size' />
                            <TextArea className='t1' onChange={() => { }} placeholder='Additional notes' />
                            <Button type='reset' className='t3' onClick={() => { alert('Todo: Input states and function submit form') }} text='ENQUIRE NOW' />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}