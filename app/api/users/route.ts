// app/api/users/route.ts
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { saltAndHashPassword } from "@/lib/utils/password";

// INSERT user
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const passwordHash = await saltAndHashPassword(`${body.passwordHash}`);

    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        passwordHash: passwordHash,
        emailVerified: new Date(),
      },
    });

    // return NextResponse.json(user, { status: 201 });
    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// FETCH users
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
