import React from 'react'
import NavPage from './NavPage';
import Section from './Section';

const Home = () => {
  return (
    <div>
         <div
                style={{
                background: 'url("https://source.unsplash.com/1800x1200?background-white")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                filter: 'blur(0.2px)',
                }}
            >
        <div className='bluebg'>
          <NavPage />
          <Section />
        </div>
      </div>
    </div>
  )
}

export default Home;