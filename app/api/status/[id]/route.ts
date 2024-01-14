import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request: Request, {params}: {params: {id: string}}) {
    const id = params.id;
    const {name, contact_number, gender, address, chiefAppointment, slot, date} = await request.json();

    if( !name || !contact_number || !gender || !address || !chiefAppointment || !slot || !date ) return NextResponse.json({message: 'Missing required'});

    try {
        const Update = await prisma.appointment.update({
            where: {
                id
            }, data: {
                name, contact_number, gender, address, chiefAppointment, slot, date
            },
        });
        return NextResponse.json(Update, { status: 200});

    } catch (error) {

        return NextResponse.json({message: "Their's something wrong"}, {status: 500})
    }
}

export async function DELETE (
    request: Request,
    { params }: { params: { id: string } }
  ) {
    const id = params.id;
    if (!id) return NextResponse.json({ message: "Missing required" });
  
    const deleted = await prisma.appointment.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(deleted);
}