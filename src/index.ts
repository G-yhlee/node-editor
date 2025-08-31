import { pipe } from "@fxts/core";
import { readDbFileWithLog } from "./modules/dbReader";
import { unwrapEither } from "./functions/either";
import { processDbData } from "./functions/dbProcessors";
import {
  log,
  handleError,
  logPassWithMessage,
  saveToOutput,
} from "./functions/sideEffects";
import { config } from "./config";

// 순수 함수: config에서 DB 경로 가져오기

// 메인 함수: 함수형 파이프라인
const main = () => {
  log("프로그램 시작...");

  pipe(
    config.dbPath("r2s"),
    readDbFileWithLog,
    unwrapEither,
    processDbData("r2s"),
    saveToOutput("processed_r2s"),
    logPassWithMessage("처리된 데이터:")
  );
};

// 프로그램 실행
try {
  main();
} catch (error) {
  handleError(error as Error);
}
