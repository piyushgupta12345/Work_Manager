import { NextResponse } from "next/server"

export function DELETE(request,{params}) {
    console.log("this is delete method !!");
    // const{params} = 
    // const userId = params.userId
    const {userId} = params;
    console.log("userId :", userId)
    return NextResponse.json({
        message: "delete",
        status: true
    })
}