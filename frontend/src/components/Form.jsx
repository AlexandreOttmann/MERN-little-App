import {useState, useEffect} from 'react';
import axios from "axios";

export default function Form() {
  const[member, setMember] = useState({
    name: "",
    role: "Matelot",
  });
// Check the input
  const handleChange = (event) => {
    const {name, value} = event.target;
    setMember(prev => {
      return({
        ...prev,
        [name]: value,
      })
    })
  }

  useEffect(() => {
    console.log(member);
  }, [member])
  
// Send data to back
  const handleClick = (event) => {
    event.preventDefault();
     window.location.reload()
    axios
    .post("http://localhost:3000/create", member)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  };

  return ( 
    <>
    <div className="pt-10 mt-5 md:col-span-2 mb-6 md:mt-0">
      <h1 className="text-2xl text-center font-bold text-slate-600 ">Ajouter un(e) Argonaute</h1>
      <form action="/" method="POST">
        <div className="shadow p-8  sm:overflow-hidden sm:rounded-md">
          <div className="space-y-6 px-4 py-5 sm:p-6"></div>
              <div className="col-span-6 text-center mb-4">
                      <label  htmlFor="street-address" className="block   text-gray-700">
                      Nom de l&apos;argonaute                      
                      </label>
                      <input
                        placeholder="Nom de l'équipier"
                        type="text"
                        name="name"
                        id="name"
                        value={member.name}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                      <div className=" col-span-6 sm:col-span-3">
                      <label htmlFor="country" className="block text-sm font-medium text-gray-700 text-center">
                        Votre Rôle ?
                      </label>
                      <select
                        value={member.role}
                        onChange={handleChange}
                        id="role"
                        name="role"
                        // defaultValue={member.role}
                        className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                        <option>Matelot</option>
                        <option>Capitaine</option>
                        <option>Second</option>
                        <option>Quartier-maître</option>
                        <option>Bob l&apos;épongeur</option>
                      </select>
                    </div>    
          </div>
          <div className="bg-gray-50 px-4 py-3 text-center sm:px-6">
            <button type="submit" onClick={handleClick} className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Ajouter</button>
          </div>
      </form>
    </div>
      </>
  );
}