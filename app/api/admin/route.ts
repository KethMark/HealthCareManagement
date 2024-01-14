import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


export async function GET(request: Request) {
   
    const res = await prisma.appointment.findMany();
    return NextResponse.json(res);
}