import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";
// 일반함수로 정의
// ({1}:{2})
// 1은 매개변수로 전달된 객체에서 children 속성 추출
// 2는 ts 의 타입을 정의해둔것. children으로 여러요소 받을 수 있다고 정의한거임
export default function GlobalLayout({
    children
}: {
    children: ReactNode
}) {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <Link href={'/'}>📚 ONEBITE BOOKS</Link>
            </header>
            <main className={style.main}>{/* 페이지 컴포넌트 */}{children}</main>
            <footer className={style.footer}>제작 @TofuMango</footer>
        </div>
    );
}