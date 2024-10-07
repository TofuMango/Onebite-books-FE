//CSS Module
// index.module.css 파일안에 들어있는 모든 클래스 네임들이 자동으로 유니크한 값으로 변환
import SearchableLayout from '@/components/searchable-layout';
import style from './index.module.css'
import { ReactNode } from 'react';

export default function Home() {
  return (
    <div className={style.container}>
      <section>
        <h3>지금 추천하는 도서</h3>
      </section>
      <section>
        <h3>등록된 모든 도서</h3>
      </section>
    </div>
  );
}

// getlayout 메서드를 호출하고 인수로 어떤 페이지 컴포넌트를 전달하면,
Home.getLayout = (page: ReactNode) => {
  // 해당 페이지 컴포넌트를 이런 레이아웃으로 묶어서 리턴해준다
  return <SearchableLayout>{page}</SearchableLayout>
} 