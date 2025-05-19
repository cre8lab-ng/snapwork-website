import { useState } from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const professionals = [
  {
    name: "Wisdoma Crane",
    image: "/images/tailor.svg",
    bio: `I grew up in the vibrant city of Ibadan, where life is always buzzing with energy. For the last 3 years, I've been perfecting my craft as a woodworker, and it’s become my passion. From hand-carving furniture to creating intricate designs, I put heart and soul into every piece I make.`,
  },
  {
    name: "Chika Obasi",
    image: "/images/painter.svg",
    bio: `Born and raised in Enugu, I found my calling as a seamstress. For over 5 years, I've tailored clothes that tell stories. Whether it's traditional attire or modern fashion, every stitch is filled with care.`,
  },
  {
    name: "Chika Obasi",
    image: "/images/electrician.svg",
    bio: `Born and raised in Enugu, I found my calling as a seamstress. For over 5 years, I've tailored clothes that tell stories. Whether it's traditional attire or modern fashion, every stitch is filled with care.`,
  },
];

export default function ServiceProfessional() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((index + 1) % professionals.length);
  const handlePrev = () =>
    setIndex((index - 1 + professionals.length) % professionals.length);

  const current = professionals[index];

  return (
    <div className="text-white p-20">
      <div className="flex justify-between">
        <div className="text-2xl md:text-3xl font-bold mb-6">
          Are You a Service Professional?
        </div>
        <Button className="border-white " variant="primary">
          Join Us
        </Button>
      </div>

      <div className="flex flex-col md:flex-row rounded-3xl w-full mt-6">
        <div className="bg-white rounded-2xl flex items-center justify-center">
          <Image
            src={current.image}
            alt={current.name}
            width={300}
            height={1000}
            className="rounded-lg"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="md:w-1/2 md:pl-10 mt-6 md:mt-0 text-white">
          <h2 className="text-xl md:text-2xl font-medium mb-2">
            {current.name}
          </h2>
          <div className="border-b border-white w-32 mb-4"></div>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            {current.bio}
          </p>
          <div className="flex items-center space-x-4 mt-6">
            <button
              onClick={handlePrev}
              className="border px-4 py-2 rounded-lg hover:bg-white hover:text-[#1E2A63]"
            >
              {"<"}
            </button>
            <span>{`0${index + 1}`}</span>
            <button
              onClick={handleNext}
              className="border px-4 py-2 rounded-lg hover:bg-white hover:text-[#1E2A63]"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
