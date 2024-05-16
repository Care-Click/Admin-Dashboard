import React ,{useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import DefaultLayout from '../../layout/DefaultLayout';


import axios from 'axios';

const SignIn: React.FC = () => {
interface inputs {
  email : string
  password : string
}
const navigate = useNavigate();
const [email,setEmail]=useState<string>("")
const [password,setPassword]=useState<string>("")

const handleSignin = async (email,password):inputs=>{

const result = await axios.post("http://localhost:3000/api/admin/signin",{
  email,
  password
})
navigate("/dashboard")
}
  return (
  
<>
  <div className="flex justify-center items-center h-screen">
    <div className="w-full max-w-lg">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-center text-black dark:text-white mb-8">
            Sign In
          </h2>
          <div className="mb-4">
            <label className="block font-medium text-black dark:text-white mb-2.5">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className="mb-6">
            <label className="block font-medium text-black dark:text-white mb-2.5">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="6+ Characters, 1 Capital letter"
              className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            />
          </div>
          <div className="mb-5">
            <button
              onClick={() => handleSignin(email, password)}
              name="Sign in"
              className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 text-white transition hover:bg-opacity-90"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</> 

  );
};

export default SignIn;
