import { NextResponse } from "@/node_modules/next/server";
import { blog } from "./blog";

export async function GET(request:Request) {
    return NextResponse.json(blog)
}