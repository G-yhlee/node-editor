import { updateDeepProperty } from "../functions/updateDeepProperty";

export const pipeSample = (data: any) => {
  return updateDeepProperty({
    obj: data,
    path: "estimateInfos.0.reserveInfos.0.memo",
    value: "new name122---asdadasd",
  });
};
