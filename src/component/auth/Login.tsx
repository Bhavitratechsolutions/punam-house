"use client";
import '/public/css/custom-admin.css'
import { signIn } from "next-auth/react";
import { useSession } from 'next-auth/react';
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import ButtonLoader from "../ButtonLoader";
import axios from 'axios';



interface LogoApi {
  logo_img: string | undefined,
}


const Login = () => {

  
  // const { data: session } = useSession();
    
    // const user = session?.user;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [logoApi, setLogoApi] = useState<LogoApi[]>([])

 

  const router = useRouter();
  const submiHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (result?.error) {
      toast.error(result.error);
      console.log("error message  =>", result.error)
    } else {
      
      localStorage.setItem('admin_user_email',email)
     
      toast.success("Login successfully");
      router.replace("/admin/dashboard");
    }
  };


 


  useEffect(() =>{
   
    const userDataString = localStorage.getItem('user');
    const user = userDataString ? JSON.parse(userDataString) : null;
    if (user) {
    
      router.replace("/admin/dashboard"); // Redirect if user is already logged in
    }

    getHeaderData()
  },[])

  const getHeaderData = async () => {
    try {
        const response = await axios.get(`/api/logo`);
        setLogoApi(response.data);
    } catch (error) {
        console.error('Error fetching header data:', error);
    }
};

  return (

    <div className="row wrapper">

      <Toaster />

      <div className="overflow-hidden d-flex justify-content-center min-vh-100 min-vw-100">

        <div className="row justify-content-center align-items-center w-100">
          <div className="col-12" style={{ maxWidth: ' 460px' }}>
            <div className="card p-3 border-0 login-form-card">
              <div className="card-body">
                <div className="text-center mb-4">
                  {/* <img className="mb-3" src="img/pixer_dark.webp" width="115px" alt="Logo" /> */}
                  <img className="mb-3"    src={logoApi[0]?.logo_img || "/img/pixer_dark.webp"} width="100px" alt="Logo" />
                  {/* <p className="fst-italic text-dark-emphasis">Login to dashboard</p> */}
                </div>
                <form action="#" className="login-form" onSubmit={submiHandler}>
                  <div className="row mb-4">
                    <div className="col-12">
                      <label className="form-label fw-medium" >Email</label>
                      <input className="form-control" type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    </div>
                  </div>
                  <div className="row mb-4">
                    <div className="col-12">
                      <div className="d-flex justify-content-between align-items-center">
                        <label className="form-label fw-medium" >Password</label>
                       
                      </div>
                      <input className="form-control" type="password" name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12">
                      <button className="btn btn-primary w-100 fw-medium shadow-none" type="submit" disabled={loading} >  {loading ? <ButtonLoader /> : "LOGIN"} </button>
                    </div>
                  </div>
                </form>
               
              </div>
            </div>
          </div>
        </div>

      </div>

     
    </div>
  );
};

export default Login;


// 'use client';
// import '/public/css/custom-admin.css';
// import { signIn, useSession } from 'next-auth/react';
// import { useRouter } from 'next/navigation';
// import React, { useState, useEffect } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import ButtonLoader from '../ButtonLoader';

// const Login = () => {
//   const { data: session, status } = useSession(); // Get session status
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [loading, setLoading] = useState(false);

//   // Redirect authenticated users to the dashboard
//   useEffect(() => {
//     if (status === 'authenticated') {
//       router.replace('/admin/dashboard');
//     }
//   }, [status, router]);

//   const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setLoading(true);

//     const result = await signIn('credentials', {
//       redirect: false,
//       email,
//       password,
//     });

//     setLoading(false);

//     if (result?.error) {
//       toast.error(result.error);
//       console.error('Error message =>', result.error);
//     } else {
//       localStorage.setItem('admin_user_email', email);
//       toast.success('Login successfully');
//       router.replace('/admin/dashboard');
//     }
//   };

//   // Prevent rendering the form while checking the session status
//   if (status === 'loading') return <p>Loading...</p>;

//   return (
//     <div className="row wrapper">
//       <Toaster />
//       <div className="overflow-hidden d-flex justify-content-center min-vh-100 min-vw-100">
//         <div className="row justify-content-center align-items-center w-100">
//           <div className="col-12" style={{ maxWidth: '460px' }}>
//             <div className="card p-3 border-0 login-form-card">
//               <div className="card-body">
//                 <div className="text-center mb-4">
//                   <img
//                     className="mb-3"
//                     src="img/pixer_dark.webp"
//                     width="115px"
//                     alt="Logo"
//                   />
//                   <p className="fst-italic text-dark-emphasis">
//                     Login to dashboard
//                   </p>
//                 </div>
//                 <form className="login-form" onSubmit={submitHandler}>
//                   <div className="row mb-4">
//                     <div className="col-12">
//                       <label className="form-label fw-medium">Email</label>
//                       <input
//                         className="form-control"
//                         type="email"
//                         name="email"
//                         onChange={(e) => setEmail(e.target.value)}
//                         placeholder="Email"
//                       />
//                     </div>
//                   </div>
//                   <div className="row mb-4">
//                     <div className="col-12">
//                       <label className="form-label fw-medium">Password</label>
//                       <input
//                         className="form-control"
//                         type="password"
//                         name="password"
//                         onChange={(e) => setPassword(e.target.value)}
//                         placeholder="Password"
//                       />
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="col-12">
//                       <button
//                         className="btn btn-primary w-100 fw-medium shadow-none"
//                         type="submit"
//                         disabled={loading}
//                       >
//                         {loading ? <ButtonLoader /> : 'LOGIN'}
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




