import { readFileSync } from 'fs';
import { resolve } from 'path';

// 순수 함수: 파일 경로를 절대 경로로 변환
export const toAbsolutePath = (filePath: string): string => resolve(filePath);

// 순수 함수: 파일 내용 읽기
export const readFile = (absolutePath: string): string => 
  readFileSync(absolutePath, 'utf-8');

// 순수 함수: JSON 파싱
export const parseJson = <T = any>(content: string): T => JSON.parse(content);