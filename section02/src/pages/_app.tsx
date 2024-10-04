import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
import { useRouter } from "next/router";

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
  return <>
    <header>
      <Link href={"/"}>index</Link>
      &nbsp;
      <Link href={"/search"}>search</Link>
      &nbsp;
      <Link href={"/book/1"}>book/1</Link>
      <div>
        <button onClick={onClickButton}>/test 페이지로 이동</button>
      </div>
    </header>
    <Component {...pageProps} /></>;
}
