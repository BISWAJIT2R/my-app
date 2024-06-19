import { gridItems } from "@/data";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
const About = () => {
  return (
    <section id="#about">
      <BentoGrid className="py-20">
        {gridItems.map(
          ({
            className,
            id,
            description,
            img,
            imgClassName,
            spareImg,
            title,
            titleClassName,
          }) => (
            <BentoGridItem
              className={className}
              key={id}
              title={title}
              description={description}
              id={id}
              img={img}
              imgClassName={imgClassName}
              spareImg ={spareImg}
              titleClassName={ titleClassName}
            />
          )
        )}
      </BentoGrid>
    </section>
  );
};

export default About;
