import Badge from "@/components/general/Badge";

import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface RealisationsCardProps {
  imgSrc: string;
  imgAlt: string;
  title: string;
  tags: Array<string>;
  description: string;
  dialogDescription: string;
}

export default function RealisationsCard({
  imgSrc,
  imgAlt,
  title,
  tags,
  description,
  dialogDescription,
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
          <Dialog>
            <DialogTrigger>Voir plus</DialogTrigger>
            <DialogContent className="sm:max-w-3xl">
              <DialogHeader className="gap-6">
                <DialogTitle>{title}</DialogTitle>
                <Image
                  src={imgSrc}
                  alt={imgAlt}
                  width={1200}
                  height={630}
                  className="border border-border rounded-2xl w-full"
                />
                <DialogDescription render={<div />}>
                  <div className="max-h-40 overflow-y-scroll">
                    {dialogDescription}
                  </div>
                  <div className="mt-4 space-x-1 space-y-1 ">
                    {tags.map((elem) => (
                      <Badge key={elem}>{elem}</Badge>
                    ))}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
