import React from 'react';
import { useState } from 'react';

import Form from '../components/Form'
import MemberList from '../components/MemberList';
import '../index.css';



function Home() {
  // State to display memberlist without refresh and dodging infinite loop
  const [members, setMembers] = useState([]);
  const [state, updateState] = useState() 
  return (
    <>
    <main>
      <Form state={state} updateState={updateState} members={members} setMembers={setMembers}/>
      <MemberList state={state} updateState={updateState}/>
    </main>
    </>
  );
}

export default Home;
