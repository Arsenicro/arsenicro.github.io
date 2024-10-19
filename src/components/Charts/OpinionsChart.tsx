import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { cn } from "@/lib/utils";
import { Pie, PieChart } from "recharts";
import { ChartConfig } from "../ui/chart";

interface IProps {
  data: { answer: string; responses: number }[];
  config: ChartConfig;
  title: string;
  className?: string;
}

export function OpinionsChart({ data, config, title, className }: IProps) {
  return (
    <Card className={cn("flex flex-col bg-inherit dark:bg-inherit", className)}>
      <CardHeader className="items-center pb-0">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={config}
          className="mx-auto aspect-square max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
            <Pie
              data={data.map((d) => ({
                ...d,
                fill: `var(--color-${d.answer})`,
              }))}
              dataKey="responses"
              nameKey="answer"
              stroke="0"
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="answer" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
