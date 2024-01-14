import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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