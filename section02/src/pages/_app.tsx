import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  // 라우터 객체 받아오기
  const router = useRouter();
  // 버튼 이벤트 핸들러 작성
  const onClickButton = () => {
    // 라우터의 push 메소드 사용
    router.push("/test");
    // replace 메서드 - 뒤로가기를 방지하면서 페이지 이동시키는 메서드
    //router.replace("/test");
    // back 메서드 - 뒤로가기
    //router.back("/test");
  };

  // 명시적으로 프리페칭 시켜줌. 마운트 되었을 때 한번만 실행시킬꺼니까 의존성 배열 뎁스를 빈배열로 전달해줌
  useEffect(() => {
    router.prefetch('/test')
  }, [])
  return <>
    <header>
      <Link href={"/"}>index</Link>
      &nbsp;
      {/* 프리페칭을 강제로 해제 */}
      <Link href={"/search"} prefetch={false}>search</Link>
      &nbsp;
      <Link href={"/book/1"}>book/1</Link>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
    </header>
    <Component {...pageProps} /></>;
}
