import { writeFile, toJsonString } from './fileOperations';
import { resolve } from 'path';

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

// 부수 효과: 데이터를 output 폴더에 저장하고 그대로 반환
export const saveToOutput = <T>(filename: string) => (data: T): T => {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const outputPath = resolve(process.cwd(), 'output', `${filename}_${timestamp}.json`);
  
  try {
    const jsonContent = toJsonString(data);
    writeFile(outputPath, jsonContent);
    log(`데이터가 저장되었습니다: ${outputPath}`);
  } catch (error) {
    log(`데이터 저장 실패: ${(error as Error).message}`);
  }
  
  return data;
};
