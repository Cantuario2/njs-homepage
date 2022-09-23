import type { GetStaticProps, NextPage } from 'next';
import Image1 from '../../public/images/img1.jpg';
import Image2 from '../../public/images/img2.jpg';
import Image3 from '../../public/images/img3.jpg';
import Image4 from '../../public/images/img4.jpg';
import Book from './components/book';
import Button from './components/button';
import LaneC from './components/lanec';
import LaneL from './components/lanel';
import LaneR from './components/laner';
import SiteMap from './components/sitemap';

const Home: NextPage = ({ cmsMock }: any) => {
  return (
    <>
      <main>
        <LaneC key={cmsMock.home.id} id='home' heading={cmsMock.home.h1} titling='' content='' imaging='' altimage='' >
          <Button type='button' className='t2' onClick={() => { alert('Todo: Function for click on Button VIEW MENU') }} text='VIEW MENU' />
          <Button type='button' className='t3' onClick={() => { alert('Todo: Function for click on BOOK A TABLE') }} text='BOOK A TABLE' />
        </LaneC>

        <LaneR key={cmsMock.lorem.id} id='lorem' heading={cmsMock.lorem.h1} titling={cmsMock.lorem.h2} content={cmsMock.lorem.p} imaging={Image1} altimage='Image 1' >
          <Button type='button' className='t1' onClick={() => { alert('Todo: Function for click on BOOK A TABLE') }} text='BOOK A TABLE' />
        </LaneR>

        <LaneL key={cmsMock.dolor.id} id='dolor' heading={cmsMock.dolor.h1} titling={cmsMock.dolor.h2} content={cmsMock.dolor.p} imaging={Image2} altimage='Image 2' >
          <Button type='button' className='t1' onClick={() => { alert('Todo: Function for click on ALL DAY MENU') }} text='ALL DAY MENU' />
          <Button type='button' className='t1' onClick={() => { alert('Todo: Function for click on DINNER MENU') }} text='DINNER MENU' />
          <Button type='button' className='t1' onClick={() => { alert('Todo: Function for click on BAR MENU') }} text='BAR MENU' />
          <Button type='button' className='t1' onClick={() => { alert('Todo: Function for click on KIDS MENU') }} text='KIDS MENU' />
        </LaneL>

        <LaneR key={cmsMock.amet.id} id='amet' heading={cmsMock.amet.h1} titling={cmsMock.amet.h2} content={cmsMock.amet.p} imaging={Image3} altimage='Image 3' >
          <Button type='button' className='t1' onClick={() => { alert('Todo: Function for click on DRINKS MENU') }} text='DRINKS MENU' />
        </LaneR>

        <LaneL key={cmsMock.elit.id} id='elit' heading={cmsMock.elit.h1} titling={cmsMock.elit.h2} content={cmsMock.elit.p} imaging={Image4} altimage='Image 4' >
          <Button type='button' className='t1' onClick={() => { alert('Todo: Function for click on BOOK FUNCTION') }} text='BOOK FUNCTION' />
        </LaneL>

        <Book key={cmsMock.book.id} id='book' heading={cmsMock.book.h1} titling={cmsMock.book.h2} content={cmsMock.book.p} >
          <Button type='button' className='t3' onClick={() => { alert('Todo: Function for click on BOOK BUTTON') }} text='BOOK BUTTON' />
        </Book>

        <SiteMap />

      </main >
    </>
  )
}

export const getStaticProps: GetStaticProps = () => {
  const cmsMock = require('../../public/cms_mock/cms.json');

  return {
    props: {
      cmsMock
    },
    revalidate: 60 * 60
  }
}

export default Home;