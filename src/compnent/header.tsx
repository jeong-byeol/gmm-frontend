'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <div>
         <nav>
            <Link href="/">사용자</Link>
            <Link href="/admin">헬스 운영자</Link>
            <Link href="/platform">플랫폼 운영자</Link>
         </nav>
        <Link href="/login">
         <button>구글 간편 회원가입</button>
        </Link>
        <button>구글 로그인</button>
        <button>로그아웃</button>
      </div>
    </header>
  );
}