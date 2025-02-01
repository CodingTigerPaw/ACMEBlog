import { NextResponse } from "next/server";
import axios from "axios";
import { BaseURL } from "@/consts";

export const GET = async () => {
  try {
    const response = await axios.get(BaseURL);

    return NextResponse.json(response.data, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
