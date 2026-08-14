import { projects } from "@/data/projects";
import RealisationsCard from "./RealisationsCard";

export default function Realisations() {
  return (
    <section id="realisations">
      <div className="px-8 md:px-12 py-24 ">
        <hgroup className=" flex flex-col gap-1">
          <span className="w-fit font-mono text-primary font-bold px-2.5 py-1.5 rounded-full border border-border">
            Projets
          </span>
          <h2 className="text-3xl mt-2">Nos réalisations</h2>
          <p className="text-xl mt-1 mb-12 text-muted-foreground">
            Quelques projets réalisés pour nos clients
          </p>
        </hgroup>
        <div className="">
          {projects.map(
            ({ title, description, tags, alt, image, dialogDescription }) => (
              <RealisationsCard
                key={title}
                description={description}
                title={title}
                tags={tags}
                imgAlt={alt}
                imgSrc={image}
                dialogDescription={dialogDescription}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
