
import axios from 'axios';
import { useState,useEffect } from 'react';
import {useNavigate } from "react-router-dom"
interface unverifiedInfo {

  FullName:string
  email :string
 phone_number : string
 verified : boolean
 id : Number
}



const TableThree = () => {

useEffect(()=>{
 getUnverified()
},[])

const navigate = useNavigate();

const [data,setData]=useState<unverifiedInfo[]>([])

  const getUnverified =   async ()=>{

    try {
    const result = await axios.get("http://localhost:3000/api/admin/notVerifiedDoctor")
    console.log(result.data)
    setData(result.data)

    } catch (error) {
      console.log(error)
    }
  }
  return (

    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
     <h1  className='' >unverified doctors</h1> 
      <div className="max-w-full overflow-x-auto">
        
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              <th className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11">
                FullName
              </th>
              <th className="min-w-[150px] py-4 px-4 font-medium text-black dark:text-white">
                Phone Number
              </th>
              <th className="min-w-[120px] py-4 px-4 font-medium text-black dark:text-white">
                
              </th>
              <th className="py-4 px-4 font-medium text-black dark:text-white">
             
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((element, key) => (
             
              <tr key={key}>
                <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                  <h5 className="font-medium text-black dark:text-white">
                    {element.FullName}
                  </h5>
                  <p className="text-sm">{element.email}</p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p className="text-black dark:text-white">
                    {element.phone_number}
                  </p>
                </td>
                <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                  <p
                    className= {"inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium"} 
                    
                  >
                    
                  </p>
                  <button onClick={() => navigate("/details", { state: { doctorId: element.id } })} className="ml-2 py-1 px-3 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
  Details 
</button>
                </td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
