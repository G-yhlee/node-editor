import { pipe } from "@fxts/core";
import { readDbFileWithLog } from "./modules/dbReader";
import { unwrapEither } from "./functions/either";
import { processDbData } from "./functions/dbProcessors";
import { log, handleError, logPassWithMessage } from "./functions/sideEffects";
import { config } from "./config";

// 순수 함수: config에서 DB 경로 가져오기
const getDbPath = (): string => config.dbPath;

// 메인 함수: 함수형 파이프라인
const main = () => {
  log("프로그램 시작...");

  pipe(
    getDbPath(),
    readDbFileWithLog,
    unwrapEither,
    processDbData,
    logPassWithMessage("처리된 데이터:")
  );
};

// 프로그램 실행
try {
  main();
} catch (error) {
  handleError(error as Error);
}
