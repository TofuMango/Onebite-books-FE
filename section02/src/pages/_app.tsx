import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      {/* // 페이지 컴포넌트 */}
      < Component {...pageProps} />
    </GlobalLayout>
  );
}
