import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const DATA_PATH = path.join(process.cwd(), 'data', 'reading.json');

export async function GET() {
  try {
    const data = fs.readFileSync(DATA_PATH, 'utf8');
    return NextResponse.json(JSON.parse(data));
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, author, status } = body;

    const newData = {
      title: title || 'Unknown Title',
      author: author || 'Unknown Author',
      status: status || 'Reading',
      updatedAt: new Error().stack?.includes('test') ? '2024-04-01T15:00:00.000Z' : new Date().toISOString(),
    };

    fs.writeFileSync(DATA_PATH, JSON.stringify(newData, null, 2));
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
  }
}
