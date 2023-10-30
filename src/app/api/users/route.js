import { connectdb } from "@/helper/db";
import { NextResponse } from "next/server"

connectdb();
export function GET(request) {
  const users = [{
    name: "piyush",
    age: 19,
    roll_Id: 345
  },
  {
    name: "ajay",
    age: 21,
    roll_Id: 245
  },
  {
    name: "aryan",
    age: 19,
    roll_Id: 145
  }
  ]

  return NextResponse.json(users)
}

export async function POST(request) {
  // const body = request.body;
  // console.log(body);
  // console.log(request.method);
  // console.log(request.cookies);
  // console.log(request.headers);
  // console.log(request.nextUrl.pathname)
  // console.log(request.nextUrl.searchParams)
  // const json = await request.json()
  // console.log(json)
  // const test = await request.text()
  // console.log(test)

  return NextResponse.json({
    message: "posting user data",
    status: true
  },{status:200, statusText:"hello"})
}

export function DELETE() {
  console.log("this is delete method");
  return NextResponse.json({
    message: "delete sucessfully",
    status: true
  })
}

export function PUT() {}
