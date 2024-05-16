import React ,{useState,useEffect} from 'react';
import { useLocation ,useNavigate } from 'react-router-dom';
import axios from 'axios';




function ProfileDetails() {

 
      interface Info {
        gender: string;
        email: string;
        phone_number: string;
        FullName: string;
        profile_picture: string;
        speciality: string;
        MedicalExp: {
            bio: string;
            id_card: string;
            medical_id: string;
        }; 
        location:{
            place:{
                country:string;
                city:string;
                district:string;
            }
        }
      }


useEffect(()=>{
  doctorInfo()
},[])

const [data,setData]=useState<Info>({ gender: "",
    email: "",
    phone_number: "",
    FullName: "",
    profile_picture: "",
    speciality: "",
    MedicalExp: {
        bio: "",
        id_card: "",
        medical_id: "",
    }, 
    location:{
        
        place:{
            country:"",
            city:"",
            district:""
        }
    }})

const location = useLocation();
const doctorId = location.state.doctorId;
const navigate = useNavigate();
  
    const doctorInfo = async ()=>{ 
      
        try {
            const result = await axios.get(`http://localhost:3000/api/admin/getoneDoctor/${doctorId}`)
            console.log(result.data);
            
            const res = result.data

       
                
              res.location =  JSON.parse(res.location) 
             
              
    
            
            

            setData(res)
            
        } catch (error) {
            
        } 
    }

    const verifyDoctor = async ()=>{
        try {
            const result = await axios.put(`http://localhost:3000/api/admin/verifyDoctor/${doctorId}`)
            
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <section className="min-h-screen bg-white">
    <div className="container mx-auto py-5">
        <div className="flex justify-center items-center h-full">
            <div className="lg:w-3/4 xl:w-1/2">
                <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg">
                    <div className="flex justify-center bg-gradient-to-r from-blue-400 to-blue-700 text-white p-4">
                        <img src={data.profile_picture} alt="Avatar" className="w-20 h-20 rounded-full" />
                    </div>
                    <div className="p-4">
                        <h2 className="text-2xl font-semibold text-center mb-2">{data.FullName}</h2>
                        <p className="text-xl font-medium text-center mb-4">{data.speciality}</p>
                        <p className="text-gray-700 font-medium">Bio</p>
                        <p className="text-gray-700 mb-4">{data?.MedicalExp?.bio}</p>
                        <p className="text-gray-700 font-medium">iD card Number</p>
                        <p className="text-gray-700 mb-4">{data.MedicalExp?.id_card}</p>
                        <p className="text-gray-700 font-medium">Medical id</p>
                        <p className="text-gray-700 mb-4">{data?.MedicalExp?.medical_id}</p>
                    </div>
                    <hr className="border-gray-300" />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">Information:</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Gender:</p>
                                <p className="text-gray-700">{data.gender}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Email:</p>
                                <p className="text-gray-700">{data?.email}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Phone:</p>
                                <p className="text-gray-700">{data.phone_number}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Location:</p>
                                <p className="text-gray-700">{data?.location.place.city}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-700 font-medium">Birthday:</p>
                                <p className="text-gray-700">{data?.date_of_birth }</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center space-x-4 p-4">
                        <button onClick={()=>{
                            verifyDoctor()
                          navigate("/dashboard")
                            }} className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                            Accept
                        </button>
                        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded">
                            Reject
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  );
}

export default ProfileDetails;
