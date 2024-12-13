import { NextRequest, NextResponse } from 'next/server';
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();
    const { id } = request;

    const response = await notion.pages.retrieve({ page_id: id });

    return NextResponse.json({
      response,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({
        message: 'Error getting objects in bucket',
        error: error,
      }),
      {
        status: 500,
      }
    );
  }
}
