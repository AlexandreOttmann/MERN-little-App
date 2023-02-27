import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Form from '../components/Form'
import MemberList from '../components/MemberList';
import '../index.css';



function Home() {
  return (
    <>
    <Header/>
    <main  className=''>
      
      <Form/>
      <MemberList/>
    </main>
    <Footer/>
    </>
  );
}

export default Home;
