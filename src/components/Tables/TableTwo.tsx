
import { useState,useEffect } from 'react';
import axios from 'axios';


interface Patientinfo {
  FullName : string ,
  profile_picture : string ,
  phone_number : string ,
  location : string,
  email : string ,
 
 

}




const TableTwo = () => {

 useEffect(()=>{
getallPatients()
 },[])
  const [data,setData]=useState<Patientinfo[]>([])

  const getallPatients = async ()=>{

    try {
      const result = await axios.get("http://localhost:3000/api/admin/getallPatients")
      
      setData(result.data)
    } catch (error) {
      console.log(error)
    }
    }
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="py-6 px-4 md:px-6 xl:px-7.5">
        <h4 className="text-xl font-semibold text-black dark:text-white">
          Patients
        </h4>
      </div>

      <div className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5">
        <div className="col-span-3 flex items-center">
          <p className="font-medium">Full Name </p>
        </div>
        <div className="col-span-2 hidden items-center sm:flex">
          <p className="font-medium">Email</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Phone Number </p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Sold</p>
        </div>
        <div className="col-span-1 flex items-center">
          <p className="font-medium">Profit</p>
        </div>
      </div>

      {data.map((element, key) => (
        <div
          className="grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-8 md:px-6 2xl:px-7.5"
          key={key}
        >
          <div className="col-span-3 flex items-center">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="h-12.5 w-15 rounded-md">
                <img src={element.profile_picture} alt="Product" />
              </div>
              <p className="text-sm text-black dark:text-white">
                {element.FullName}
              </p>
            </div>
          </div>
          <div className="col-span-2 hidden items-center sm:flex">
            <p className="text-sm text-black dark:text-white">
              {element.email}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">
              {element.phone_number}
            </p>
          </div>
          <div className="col-span-1 flex items-center">
            <p className="text-sm text-black dark:text-white">{element.date_of_birth}</p>
          </div>
          <div className="col-span-1 flex items-center">
            {/* <p className="text-sm text-meta-3">${product.profit}</p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TableTwo;
