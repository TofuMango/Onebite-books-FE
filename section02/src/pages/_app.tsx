import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import React, { ReactNode } from "react";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  // 반환값도 똑같이 page를 return하니까 ReactNode로 
  // 이때 book페이지 처럼 getlayout이라는 메서드가 없는 경우 물음표 찍어서 옵셔널한 타입으로 만들어줌
  getLayout?: (page: ReactNode) => ReactNode;
}

// app 컴포넌트가 받는 props 확장
export default function App({ Component, pageProps }: AppProps & {
  // component라는 props type은 nextpagewithlayout이라는 타입
  // getlayout을 포함하고 있는 nextpage이다. 라고 정의한것임
  Component: NextPageWithLayout;
}) {
  // getLayout 함수가 app컴포넌트에 전달된것을 확인
  // console.log(Component.getLayout);
  // 물음표 함수 뒤는 그냥 현재의 페이지를 return만 한다.
  const getLayout = Component.getLayout ?? ((page: ReactNode) => page);
  return (
    <GlobalLayout>
      {/* // 페이지 컴포넌트 */}
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
