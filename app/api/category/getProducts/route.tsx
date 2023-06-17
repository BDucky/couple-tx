import { NextApiResponse, NextApiRequest } from "next";
import prisma from "@/libs/prismadb";
import { NextResponse } from "next/server";
import { parse } from "url";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { search } = parse(req.url || "", true);
  const searchParams = new URLSearchParams(search || "");
  const category = searchParams.get("category") as string;
}
