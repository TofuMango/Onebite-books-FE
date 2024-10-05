//CSS Module
// index.module.css 파일안에 들어있는 모든 클래스 네임들이 자동으로 유니크한 값으로 변환
import style from './index.module.css'

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
