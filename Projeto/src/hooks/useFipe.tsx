import { useContext } from "react";

import { FipeContext } from "../constexts/fipe.context";

export function useFipe() {
  const context = useContext(FipeContext);

  return context;
}