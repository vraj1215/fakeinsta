import S from "@/util/model";
import { connectToDatabase } from "@/util/mongoConnect";
import { NextRequest,NextResponse } from "next/server";

export async function POST(req:NextRequest){
    await connectToDatabase();
    
    const {num,pass}=await req.json();
    console.log(num,pass);
    const a=await S.create({num,pass});
    return NextResponse.json({'message':'okay',a})
}