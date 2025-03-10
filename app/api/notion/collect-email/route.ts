import { NextRequest, NextResponse } from 'next/server';
const { Client } = require('@notionhq/client');

const notion = new Client({
  auth: process.env.NOTION_WRITE_TOKEN,
});

export async function POST(req: NextRequest) {
  try {
    const request = await req.json();
    const { id, email } = request;

    const page = await notion.pages.retrieve({ page_id: id });

    const response = await notion.pages.create({
      parent: {
        type: 'database_id',
        database_id: '1497a88639338047aeb1e8ba3643490c',
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: id,
              },
            },
          ],
        },
        'Email Address': {
          email: email,
        },
        'Unmet Need': {
          relation: [
            {
              id: id,
            },
          ],
        },
      },
    });

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
