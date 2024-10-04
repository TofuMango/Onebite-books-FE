import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    // 현재시간을 보관하고 있는 새로운 객체 생성
    const date = new Date();
    // 응답값으로 json메서드 호출
    // time이라는 프로퍼티 값은 date객체의 toLocaleString 메서드 호출한 결과를 전달
    res.json({ time: date.toLocaleString() })
}
