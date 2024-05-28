import { useEffect, useState } from "react"
import { useData } from "../../../Context/DataContext"

export default function Greeting(){
    const [hour,setHour] = useState(0)
    const {firstName} = useData()
  
  
    useEffect(function(){
      let now = new Date()
      const hour = now.getHours()
      setHour(Number(hour))
    },[])
    return(
      <div className="flex justify-start w-full mt-8 px-5 mb-5">
        <div className="flex  justify-start items-center gap-0">
          <p className="text-2xl text-black font-bold ">Good { hour < 12 ?  "Morning" : hour >= 12 && hour < 16 ? "Afternoon" : "Evening"} {firstName},</p>
            <p className="text-4xl gelatine">{ hour <= 12 ?  '🌤️' :'🌑'}</p>
        </div>
  
      </div>
    )
  }