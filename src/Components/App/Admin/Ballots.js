import { useEffect, useState } from "react";
import { useData } from "../../../Context/DataContext";
import { NavLink } from "react-router-dom";


function Ballots() {
  const [ballots, setBallots ] = useState([])
 
  
 
  async function GetBallots() {
   const token= localStorage.getItem("token")
   const  email = JSON.parse(localStorage.getItem("user")).email
 
    try {
      const res = await fetch(`http://10.0.0.121:3000/api/v1/ballots`, {
        method: "get",
        body:JSON.stringify(),
        headers: {
          "Content-Type": "application/json",
          "X-User-Token": token,
          "X-User-Email": email,
        },
      });
      const data = await res.json();
      if (!res.ok) {
        
        return "error";
      }
      if (data?.length >= 0) {
        setBallots(data)

        return "success";
      }
    } catch {
      alert("there was an error trying to fetch data");
    } finally {
    }
  }

  useEffect(function(){
   console.log(3)
     GetBallots()
   
  },[])
  return( <div className=" w-full h-full">
    
    <ActivePolls size={ballots.length}/>
  
{ballots.length === 0 ? <EmptyBallotMessage/> : ""}
{ ballots.map((ballot)=>{ return <BallotItem ballot={ballot} key={ballot.id}/>})
}

  </div>);
}

function BallotItem({ballot}){
  return(
    <div className="grid grid-rows-2 border-b-2 border-l-2 border-r-2 divide-y bg-slate-900  border-slate-700  rounded-xl gap-0 mt-10 px-5  md:mx-28 lg:mx-52">
      <div className="flex flex-col  items-center  p-5   ">
            <h1 className="text-2xl text-blue-700 underline ">{ballot?.name}</h1>
            <p className="text-center font-mono text-white mt-5 mb-5">"{ballot?.description}"</p>
      </div>
      <div className="flex  justify-center items-center w-full h-full space-x-2">
        <button className="w-32 font-bold rounded-lg border-2 border-gray-200 text-blue-700 hover:text-black hover:bg-blue-700  hover:border-blue-700 p-2 ">View</button>
        <button className="w-32 font-bold rounded-lg border-2 border-gray-200 text-green-700 hover:text-black hover:bg-green-700  hover:border-green-700   p-2 ">Edit</button>
        <button className="w-32 font-bold rounded-lg border-2 border-gray-200 text-red-700 hover:text-black hover:bg-red-700 p-2  hover:border-red-700  ">Delete</button>

      </div>
    </div>
  )



}

function ActivePolls({size}){
  return(<div className="flex  w-full justify-end  mt-8 mb-5   ">
      <div className="flex  w-72  p-2 space-x-5 justify-end items-center border-1 border-gray-500">
        <p className="text-2xl shake font-bold text-red-700">Active Ballots:</p>
        <p className="text-xl text-black">{size}</p>
      </div>
  </div>

  )
}
function EmptyBallotMessage(){
  return (  <div className="flex pulse flex-col items-center w-full mt-10">
  < p className="w-42 font-bold text-2xl text-blue-950 text-center">You seem to have no Ballots</p>
  <NavLink to="/admin/create" className=" rounded-full p-2 bg-red-500">+ Create one</NavLink> 
</div>)
}



export default Ballots;
