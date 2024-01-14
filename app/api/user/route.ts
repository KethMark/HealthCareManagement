import { NextResponse } from "next/server";
import prisma from '@/lib/prisma'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST (request: Request) {
    const { getUser } = getKindeServerSession()

    const user = await getUser()

    if(!user) return NextResponse.json({message: "Missing"})

    const { name, contact_number, gender, address, chiefAppointment, slot, date} = await request.json();
    if (!name || !contact_number || !gender || !address || !chiefAppointment || !slot || !date ) return NextResponse.json({message: 'missing required'})

    const res = await prisma.appointment.create({
        data: {
            name, contact_number, gender, address, chiefAppointment, slot, date, userId: user?.id
        }
    })
    return NextResponse.json(res)
}

export async function GET(request: Request) {
    const { getUser } = getKindeServerSession()

    const user = await getUser()

    if(!user) return NextResponse.json({message: "Missing"})
   
    const res = await prisma.appointment.findMany({
        where: {
            userId: user?.id
        }
    });
    return NextResponse.json(res);
}
