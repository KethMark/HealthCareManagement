import { NextResponse } from "next/server";
import prisma from '@/lib/prisma'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST (request: Request) {
    const { message, name} = await request.json();
    if (!message || !name) return NextResponse.json({message: 'missing required'})

    const res = await prisma.status.create({
        data: {
            message, name
        }
    })
    return NextResponse.json(res)
}

export async function GET(request: Request) {

    const res = await prisma.status.findMany();
    return NextResponse.json(res);
}