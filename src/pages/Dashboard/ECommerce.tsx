import React from 'react';
import CardDataStats from '../../components/CardDataStats';
// import ChartOne from '../../components/Charts/ChartOne';
// import ChartThree from '../../components/Charts/ChartThree';
// import ChartTwo from '../../components/Charts/ChartTwo';
// import ChatCard from '../../components/Chat/ChatCard';
// import MapOne from '../../components/Maps/MapOne'
 import axios from 'axios';
import { useState,useEffect } from 'react';
import TableThree from '../../components/Tables/TableThree';
import DefaultLayout from '../../layout/DefaultLayout';

interface docDetails {

  speciality : string ,
  _count : number 
}



const ECommerce: React.FC = () => {


  useEffect(()=>{
    totalDocs()
   },[])


   const [data,setData]=useState<docDetails[]>([])

  const totalDocs = async ()=>{
    try {
      const result = await axios.get("http://localhost:3000/api/admin/totalbySpeciality")
      setData(result.data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <DefaultLayout>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
      {data.map((element, index) => (
        <React.Fragment key={index}>
          <div className="grid grid-row-1 gap-4 md:gap-6 xl:col-span-1 2xl:col-span-1">
            <CardDataStats
              title={element.speciality}
              total={parseInt(element._count)}
              rate="0.95%"
            >
              <svg
                className="fill-primary dark:fill-white"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG content */}
              </svg>
            </CardDataStats>
          </div>
        </React.Fragment>
      ))}
    </div>
    <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
      <div className="col-span-12 xl:col-span-8">
        <TableThree />
      </div>
    </div>
  </DefaultLayout>
  
  );
 
};

export default ECommerce;
