// 부수 효과: 콘솔 출력
export const log = (message: string): void => {
  console.log(message);
};

// 부수 효과: 값을 로그에 출력하고 그대로 반환 (파이프라인에서 사용)
export const logPass = <T>(value: T): T => {
  console.log(value);
  return value;
};

// 부수 효과: 메시지와 함께 값을 로그에 출력하고 그대로 반환
export const logPassWithMessage = <T>(message: string) => (value: T): T => {
  console.log(message, value);
  return value;
};

// 부수 효과: 에러 출력 및 종료
export const handleError = (error: Error): never => {
  console.error("오류:", error.message);
  process.exit(1);
};
