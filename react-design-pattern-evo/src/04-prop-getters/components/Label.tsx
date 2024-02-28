import { LabelProps } from "@propGetters/types";

export function Label({ children }: LabelProps) {

  return <div className="bg-athensGray text-trout py-[5px] px-[7px]">{children}</div>
}