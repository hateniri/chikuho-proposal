import { NextResponse } from 'next/server'

const VALID_PASSWORD = process.env.ACCESS_PASSWORD || 'chikuho2025'

export async function POST(request: Request) {
  const { password } = await request.json()
  
  if (password === VALID_PASSWORD) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('auth', 'true', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    })
    return response
  }
  
  return NextResponse.json({ success: false }, { status: 401 })
}