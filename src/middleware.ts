import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // 인증 체크 등의 미들웨어 로직

  
  return NextResponse.next()
}


export const config = {
    matcher: [
    //   '/(routes)/:path*', //해당경로는 모두 미들웨어 거침
    // '/((?!api|_next/static|_next/image|favicon.ico).*)' //미들웨어 예외처리
    ]
  }
