import { updateDeepProperty } from "../functions/updateDeepProperty";

export const pipeSample = (data: any) => {
  return updateDeepProperty({
    obj: data,
    path: "someInfo.name",
    value: "new name",
  });
};
