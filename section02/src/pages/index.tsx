//CSS Module
// index.module.css 파일안에 들어있는 모든 클래스 네임들이 자동으로 유니크한 값으로 변환
import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css'
import { ReactNode } from 'react';

export default function Home() {
  return (
    <>
      {/* 인라인 스타일을 지정해줄수는 있으나, 가독성을 해침 */}
      {/* return <h1 style={{ color: "red" }}>인덱스</h1>; */}
      <h1 className={style.h1}>인덱스</h1>
      <h2 className={style.h2}>H2</h2>
    </>
  );
}

// getlayout 메서드를 호출하고 인수로 어떤 페이지 컴포넌트를 전달하면,
Home.getLayout = (page: ReactNode) => {
  // 해당 페이지 컴포넌트를 이런 레이아웃으로 묶어서 리턴해준다
  return <SearchableLayout>{page}</SearchableLayout>
} 