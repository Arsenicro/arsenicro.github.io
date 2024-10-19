import { useContext } from "react";
import { OpinionsContext } from "./OpinionsProvider";

export default function useOpinions() {
  const opinionsContext = useContext(OpinionsContext);
  if (!opinionsContext) {
    throw new Error("useOpinions must be used within a OpinionsProvider");
  }
  return opinionsContext;
}
