import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { first_name, last_name, email, phone, password, address, cep } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.users.create({
      data: {
        first_name,
        last_name,
        email,
        phone,
        password_hash: hashedPassword,
        address,
        cep,
      },
    });

    return Response.json({ success: true, newUser });
  } catch (error: unknown) {
  if (error instanceof Error) {
    return Response.json({ success: false, error: error.message }, { status: 500 });
  }

  return Response.json({ success: false, error: "Erro inesperado" }, { status: 500 });
}

}
