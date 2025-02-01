import { NextResponse, NextRequest } from "next/server";
import axios from "axios";
import { BaseURL } from "@/consts";

export const GET = async (req: NextRequest) => {
  const id = req.nextUrl.pathname.split("/").pop();
  try {
    const response = await axios.get(`${BaseURL}/${id}`);

    return NextResponse.json(response.data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", // ✅ Pozwala na CORS
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
