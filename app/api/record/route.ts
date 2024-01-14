import { NextResponse } from "next/server";
import prisma from '@/lib/prisma'
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function POST (request: Request) {
    const { name, contact_number, gender, address, chiefAppointment, slot, date, record, case_no, age, symptoms, date_of_record, prescription, pres_no_days} = await request.json();
    if (!name || !contact_number || !gender || !address || !chiefAppointment || !slot || !date || !record || !case_no || !age || !symptoms || !date_of_record || !prescription || !pres_no_days ) return NextResponse.json({message: 'missing required'})

    const res = await prisma.record.create({
        data: {
            name, contact_number, gender, address, chiefAppointment, slot, date, record, case_no, age, symptoms, date_of_record, prescription, pres_no_days
        }
    })
    return NextResponse.json(res)
}

export async function GET(request: Request) {
    const res = await prisma.record.findMany();
    return NextResponse.json(res);
}