import Image, { StaticImageData } from "next/image";
import Button from "./Button";

type CourseCardProps = {
  image: StaticImageData;
  tag: string;
  title: string;
  description: string;
  features: string[];
  buttonText: string;
};

const CourseCard = (props: CourseCardProps) => {
  const { image, tag, title, description, features, buttonText } = props;
  return (
    <div className="bg-white rounded-2xl p-2.5 shadow-[0_5px_30px_rgba(0,0,0,0.2)] w-[400px]">
      <Image src={image} alt="" className="rounded-2xl" />
      <div className="flex flex-col gap-2.5 p-1.5">
        <div className="font-semibold text-xs text-secondary">{tag}</div>
        <h3 className="font-semibold text-xl">{title}</h3>
        <p>{description}</p>
        <ul className="list-disc ml-4.5">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <Button className="mt-7 w-full">{buttonText}</Button>
    </div>
  );
};

export default CourseCard;
