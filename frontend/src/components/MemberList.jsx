import { useEffect, useState } from "react";
import axios from "axios";


function MemberList() {

  // Fetch list from back
const [members, setMembers] = useState([]);
 useEffect(() => {
  fetch("http://localhost:3000/")
  .then((res) => res.json())
  .then((jsonRes) => setMembers(jsonRes))
}, [])

// Delete button
const deleteMember = (id) => {
  console.log(id)
  axios.delete(`http://localhost:3000/delete/${id}`).then((res => console.log(res))).catch((err) => console.log(err))
   event.preventDefault();
  window.location.reload()
};
 
  return(
    <div className="h-auto w-100 pb-5 shadow sm:overflow-hidden sm:rounded-md">
      <h1 className="text-2xl text-center font-bold text-slate-600 mb-5 ">Membres de l&apos;équipage {members.length > 0 ?  `- ${members.length}` : null }</h1>
      {members.length > 0 ? (
        <div className="flex flex-col m-5 h-auto  md:grid  grid-cols-3 gap-4 justify-center ">
          {members.map(member => {
            return(
              <div className="flex flex-row justify-center md:justify-around   " key={member._id}>
                <span id="badge-dismiss-indigo" className=" inline-flex items-center p-10 py-1 mr-5 text-base  font-medium text-indigo-800 bg-indigo-100 rounded dark:bg-indigo-900 dark:text-indigo-300">
                  {member.name} - {member.role}
                <button onClick={() => deleteMember(member._id)} className="inline-flex items-center p-0.5 ml-2 text-sm text-indigo-400 bg-transparent rounded-sm hover:bg-indigo-200 hover:text-indigo-900 dark:hover:bg-indigo-800 dark:hover:text-indigo-300" data-dismiss-target="#badge-dismiss-indigo" aria-label="Remove">
                  <svg aria-hidden="true" className="w-3.5 h-3.5"  fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </button>
                  </span>
              </div>
            )
          })}
        </div>
      ): <div className=" text-center text-red-500" >Aucun Membre dans l&apos;équipage...</div>}
    </div>
  )
}

export default MemberList;