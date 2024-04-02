import { Locale, formatRelative } from "date-fns";
import { enGB } from "date-fns/locale";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const formatRelativeLocale = {
  lastWeek: "'Last' eeee",
  yesterday: "'Yesterday'",
  today: "'Today'",
  tomorrow: "'Tomorrow'",
  nextWeek: "'Next' eeee",
  other: "dd.MM.yyyy",
};

const locale: Locale = {
  ...enGB,
  formatRelative: (token) => formatRelativeLocale[token],
};

interface IProps {
  title: string;
  description: string;
  imageUrl: string;
  date: string;
  link: string;
  where?: string;
}

export default function BlogCard({
  title,
  description,
  imageUrl,
  date,
  link,
  where,
}: IProps) {
  return (
    <Card className="w-[300px] h-[450px] hover:scale-110 transition-transform duration-300 ease-in-out">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img
          src={imageUrl}
          alt="blog"
          className="w-full h-[150px] object-cover rounded-3xl"
        />
        {where && (
          <p className="text-sm text-center text-slate-400">On {where}</p>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        <time dateTime={date}>
          {formatRelative(new Date(date), new Date(), { locale })}
        </time>
        <Button asChild>
          <a href={link}>Read</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
