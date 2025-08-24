import { pipe, map } from "@fxts/core";

// 순수 함수: 사용자 정보 포맷팅
export const formatUser = (user: { name: string; email: string }): string =>
  `  - ${user.name} (${user.email})`;

// 순수 함수: DB 데이터 처리 및 출력 문자열 생성
export const processDbData = (dbData: any): any => {
  const header = "\n=== DB 데이터 처리 ===";

  return dbData;
};
