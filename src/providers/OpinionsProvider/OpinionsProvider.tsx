import { semesters } from "@/resources/semesters";
import { createContext, useMemo } from "react";
import { Opinions } from "./Opinions.type";
import { getOpinions } from "./parser";

type ITestimonialsContext = Opinions;

export const OpinionsContext = createContext<ITestimonialsContext | undefined>(
  undefined
);

export default function OpinionsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = useMemo(() => {
    return getOpinions(semesters);
  }, []);

  return (
    <OpinionsContext.Provider value={data}>{children}</OpinionsContext.Provider>
  );
}
