import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface CoachingModeProps {
  image: StaticImageData;
  title: string;
  subTitle: string;
  description: string;
  buttonText: string;
}

const CoachingMode = (props: CoachingModeProps) => {
  const { image, title, subTitle, description, buttonText } = props;

  return (
    <div className="bg-white rounded-2xl p-2.5 shadow-[0_5px_30px_rgba(0,0,0,0.2)]">
      <div className="flex gap-5">
        <Image
          src={image}
          alt=""
          className="rounded-2xl"
          width="263"
          height="180"
        />
        <div className="flex flex-col gap-2.5">
          <div className="flex items-center gap-2.5">
            <h3 className="text-2xl font-semibold">{title}</h3>
            <h4 className="italic text-gray-500">{subTitle}</h4>
          </div>
          <p>{description}</p>
          <Button className="bg-secondary">{buttonText}</Button>
        </div>
      </div>
    </div>
  );
};

export default CoachingMode;
