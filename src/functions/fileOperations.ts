import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve, dirname } from 'path';

// 순수 함수: 파일 경로를 절대 경로로 변환
export const toAbsolutePath = (filePath: string): string => resolve(filePath);

// 순수 함수: 파일 내용 읽기
export const readFile = (absolutePath: string): string => 
  readFileSync(absolutePath, 'utf-8');

// 순수 함수: JSON 파싱
export const parseJson = <T = any>(content: string): T => JSON.parse(content);

// 순수 함수: 객체를 JSON 문자열로 변환
export const toJsonString = (data: any): string => JSON.stringify(data, null, 2);

// 부수 효과: 디렉토리 생성 (없으면)
export const ensureDirectoryExists = (dirPath: string): void => {
  if (!existsSync(dirPath)) {
    mkdirSync(dirPath, { recursive: true });
  }
};

// 부수 효과: 파일 저장
export const writeFile = (filePath: string, content: string): void => {
  const dir = dirname(filePath);
  ensureDirectoryExists(dir);
  writeFileSync(filePath, content, 'utf-8');
};