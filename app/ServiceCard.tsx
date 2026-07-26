import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ReactNode } from "react";

interface LucideProps {
  size?: number | string;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
  [key: string]: any; // Any other SVG attributes
}

type LucideIcon = React.FC<LucideProps>;

interface ServiceCardProps {
  title: string;
  description: string;
  content: ReactNode;
  logo: LucideIcon;
  className: string;
  key: string;
}

export default function ServiceCard({
  title,
  description,
  content,
  logo: Logo,
  className,
  key,
}: ServiceCardProps) {
  return (
    <Card className={className} key={key}>
      <CardHeader>
        <CardTitle>
          <div className="flex flex-col gap-2">
            <Logo className="text-primary h-10 w-10" />
            {title}
          </div>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{content}</CardContent>
    </Card>
  );
}
