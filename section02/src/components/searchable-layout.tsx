import { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/router";
import style from './searchable-layout.module.css'

export default function SearchableLayout({
    children,
}: {
    children: ReactNode;
}) {
    const router = useRouter();

    // 검색어를 저장할 state
    const [search, setSearch] = useState("");

    // 기본적으로 query string 타입은 여러개이므로 string 타입으로 단언 해주기
    const q = router.query.q as string;

    //q의 값이 변하면 검색어 값이 바꼈다는 것, q의 값이 있다면 q의 값을 넣고, 없다면 빈문자열
    useEffect(() => {
        setSearch(q || "");
    }, [q])

    // 사용자가 입력하는 값을 실시간으로 search state에 보관하게끔 정의
    // React에서 changeEvent가 html의 input element에서 발생한 타입이다 라는 뜻
    const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value)
    }

    const onSubmit = () => {
        // 예외처리 - 입력값이 없거나 현재 쿼리스트링 q값이 search state 값과 동일할 때 return해서 이동X
        if (!search || q === search) return;
        router.push(`/search?q=${search}`)
    }

    // 엔터키로 검색하기
    const onkeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        // 키보드 입력 enter가 들어왔을 때, onsubmit을 호출
        if (e.key === 'Enter') {
            onSubmit()
        }
    };
    return (
        <div>
            <div className={style.searchbar_container}>
                <input value={search} onKeyDown={onkeyDown} onChange={onChangeSearch} placeholder="검색어를 입력하세요" />
                <button onClick={onSubmit}>검색</button>
            </div>
            {children}
        </div>
    );
}