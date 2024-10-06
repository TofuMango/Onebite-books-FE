import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";

export default function Page() {
    // router훅 호출해서 router라는 변수에 저장
    // 변수안에 router 객체가 저장됨
    // 이때 router 객체 안에는 routing과 관련된 대부분의 정보가 포함되어있음.
    const router = useRouter();
    // 콘솔에 찍어보기
    // console.log(router);
    // 쿼리스트링의 값을 꺼내와서 사용할 수 있다.
    // const q = router.query.q;
    // 구조분해할당 문법을 이용해서 작성해도됨
    const { q } = router.query;

    return <h1>Search {q}</h1>;
}

Page.getLayout = (page: ReactNode) => {
    return <SearchableLayout>{page}</SearchableLayout>
}