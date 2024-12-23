import React from "react"
import Image from "next/image"
import Unauthorized from "@/public/assets/Images/error401.svg"
const UnauthorizedAccess = ()=>{

    return(
        <div className="flex items-center justify-center p-14">
        <Image src={Unauthorized} width={500} className="w-[78%]" alt="Unauthorized access"/>
        </div>
    )
}
export default UnauthorizedAccess