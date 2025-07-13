import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { userId, quantity_liters, address } = await req.json();

  const collection = await prisma.collections.create({
    data: {
      user_id: userId,
      quantity_liters,
      address,
    },
  });

  return new Response(JSON.stringify(collection), { status: 201 });
}
