// Either 타입 정의
export type Either<L, R> = { type: 'left'; value: L } | { type: 'right'; value: R };

// Either 생성 함수
export const left = <L>(value: L): Either<L, never> => ({ type: 'left', value });
export const right = <R>(value: R): Either<never, R> => ({ type: 'right', value });

// Either 유틸리티 함수
export const isLeft = <L, R>(either: Either<L, R>): either is { type: 'left'; value: L } =>
  either.type === 'left';

export const isRight = <L, R>(either: Either<L, R>): either is { type: 'right'; value: R } =>
  either.type === 'right';

// Either를 일반 값으로 변환 (에러 시 throw)
export const unwrapEither = <L, R>(either: Either<L, R>): R => {
  if (either.type === 'left') {
    throw either.value;
  }
  return either.value;
};

// Try-catch를 함수형으로 래핑
export const tryCatch = <T>(fn: () => T): Either<Error, T> => {
  try {
    return right(fn());
  } catch (error) {
    return left(error as Error);
  }
};