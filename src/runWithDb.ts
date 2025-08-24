import { resolve } from 'path';
import { spawn } from 'child_process';

// 순수 함수: index.js 경로 생성
const getIndexPath = (): string => resolve(__dirname, 'index.js');

// 부수 효과: 로그 출력
const log = (message: string) => () => {
  console.log(message);
};

// 부수 효과: 자식 프로세스 실행
const spawnIndexProcess = (): void => {
  const indexPath = getIndexPath();
  
  // config에서 DB 경로를 읽으므로 인자 전달 불필요
  const child = spawn('node', [indexPath], {
    stdio: 'inherit'
  });

  child.on('error', (error) => {
    console.error('index.ts 실행 중 오류 발생:', error);
    process.exit(1);
  });

  child.on('exit', (code) => {
    if (code !== 0) {
      console.error(`index.ts가 코드 ${code}로 종료되었습니다.`);
      process.exit(code || 1);
    }
  });
};

// 메인 함수
const main = (): void => {
  log('index.ts 실행 중...\n')();
  spawnIndexProcess();
};

// 프로그램 실행
main();