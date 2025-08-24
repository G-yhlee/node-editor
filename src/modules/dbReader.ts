import { pipe } from '@fxts/core';
import { DbContent } from '../types/db';
import { Either, tryCatch, left } from '../functions/either';
import { toAbsolutePath, readFile, parseJson } from '../functions/fileOperations';
import { log } from '../functions/sideEffects';

// 메인 함수: DB 파일 읽기 (Either 반환)
export const readDbFile = (filePath: string): Either<Error, DbContent> => {
  const result = tryCatch(() =>
    pipe(
      filePath,
      toAbsolutePath,
      readFile,
      parseJson<DbContent>
    )
  );
  
  if (result.type === 'left') {
    return left(new Error(`DB 파일 읽기 실패: ${result.value.message}`));
  }
  
  return result;
};

// 로그와 함께 DB 파일 읽기
export const readDbFileWithLog = (filePath: string): Either<Error, DbContent> => {
  log(`DB 파일 읽기 중: ${filePath}`);
  const result = readDbFile(filePath);
  if (result.type === 'right') {
    log('DB 파일 읽기 완료');
  }
  return result;
};