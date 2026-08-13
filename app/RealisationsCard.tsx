import Badge from "@/components/general/Badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

interface RealisationsCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  tags: Array<string>;
  description: string;
}

export default function RealisationsCard({
  imgSrc,
  imgAlt,
  title,
  tags,
  description,
}: RealisationsCardProps) {
  return (
    <Card className="bg-white">
      <Image
        src={imgSrc}
        alt={imgAlt}
        width={1200}
        height={630}
        className="border-b border-border w-full"
      />
      <CardHeader>
        <CardTitle className="text-xl ">{title}</CardTitle>
        <CardDescription className="mt-2 space-y-2 col-span-2">
          <p>{description}</p>
          <div className="mb-2 space-x-1 space-y-1 ">
            {tags.map((elem) => (
              <Badge key={elem}>{elem}</Badge>
            ))}
          </div>
        </CardDescription>
        <CardAction>
          <button>Voir plus</button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
