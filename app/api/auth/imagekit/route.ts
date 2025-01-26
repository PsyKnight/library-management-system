import config from "@/lib/config";
import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const { publicKey, urlEndpoint, privateKey } = config.env.imagekit;

const imagekit = new ImageKit({ publicKey, privateKey, urlEndpoint });

export async function GET() {
  return NextResponse.json(imagekit.getAuthenticationParameters());
}
