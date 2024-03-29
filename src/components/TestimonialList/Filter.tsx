import { cn } from "@/lib/utils";
import { XIcon } from "lucide-react";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface IProps {
  className?: string;
  setValue: (value: string) => void;
  value: string | undefined;
  placeholder: string;
  options: string[];
  getOptionLabel?: (option: string) => string;
}

export default function Filter({
  className,
  setValue,
  value,
  placeholder,
  options,
  getOptionLabel = (option) => option,
}: IProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      <Select value={value} onValueChange={setValue}>
        <SelectTrigger className="w-[200px]">
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {getOptionLabel(option)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button variant="ghost" size="icon" onClick={() => setValue("")}>
        <XIcon />
      </Button>
    </div>
  );
}
