import { NextResponse } from "next/server"

export function GET(request){
    console.log("work in get post api")
    return NextResponse.json({
        message:"get post working",
        status:true
    })
}