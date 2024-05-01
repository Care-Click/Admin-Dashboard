
import { useState , useEffect} from 'react';

import axios from 'axios';




interface DoctorData {
  profile_picture: string;
  FullName: string;
  email: string;
  phone_number: string;
  verified : string,
  speciality : string,
  status : string
  // Add more properties as needed
}


const TableOne = () => {

  const [data,setData]=useState<DoctorData[]>([])

  useEffect(()=>{
getAlldoctors()
  },[])


  const  getAlldoctors =  async ()=>{
    try {
      const result = await axios.get("http://localhost:3000/api/admin/getallDoctors") 
    
    setData(result.data)
    } catch (error) {
      console.log(error)
    }
    
  }

  
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
       Doctors 
      </h4>

      <div className="flex flex-col">
        <div className="grid grid-cols-3 rounded-sm bg-gray-2 dark:bg-meta-4 sm:grid-cols-5">
          <div className="p-2.5 xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              FullName
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Email
            </h5>
          </div>
          <div className="p-2.5 text-center xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
              Phone Number
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            speciality
            </h5>
          </div>
          <div className="hidden p-2.5 text-center sm:block xl:p-5">
            <h5 className="text-sm font-medium uppercase xsm:text-base">
            verificarion status
            </h5>
          </div>
        </div>

        {data.map((element, key) => (
          <div
            className={`grid grid-cols-3 sm:grid-cols-5 ${
              key === data.length - 1
                ? ''
                : 'border-b border-stroke dark:border-strokedark'
            }`}
            key={key}
          >
            <div className="flex items-center gap-3 p-2.5 xl:p-5">
              <div className="flex-shrink-0">
                <img src={element.profile_picture} alt="Brand" className="h-8 w-auto" />
              </div>
              <p className="hidden text-black dark:text-white sm:block">
                {element.FullName}
              </p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-black dark:text-white">{element.email}</p>
            </div>

            <div className="flex items-center justify-center p-2.5 xl:p-5">
              <p className="text-meta-3">{element.phone_number}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-black dark:text-white">{element.speciality}</p>
            </div>

            <div className="hidden items-center justify-center p-2.5 sm:flex xl:p-5">
              <p className="text-meta-5">{JSON.stringify(element.verified)
}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableOne;
