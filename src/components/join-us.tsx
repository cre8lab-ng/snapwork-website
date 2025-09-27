import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const professionals = [
  {
    name: "Lola Oluwo",
    image: "/images/lola-oluwo.svg",
    bio: `I grew up in the vibrant city of Ibadan, where life is always buzzing with energy. For the last 3 years, I've been perfecting my craft as a woodworker, and it's become my passion. From hand-carving furniture to creating intricate designs, I put heart and soul into every piece I make.`,
  },
 {
  name: "Chika Obasi",
  image: "/images/lola-oluwo.svg",
  bio: `In the busy streets of Enugu, I learned early that every engine has a story. Over the last 5 years, I’ve built my reputation as a mechanic who doesn’t just fix cars—I restore confidence on the road. From routine servicing to complex repairs, I take pride in turning problems into smooth rides.`,
},
{
  name: "Bimbo Ola",
  image: "/images/lola-oluwo.svg",
  bio: `Lagos Island’s energy has always inspired me to create beauty out of everyday life. For 3 years, I’ve worked as a hairdresser who believes every style is a form of self-expression. Whether it’s a fresh cut, a bold color, or a timeless look, I craft hairstyles that empower people to feel their best.`,
},

];

export default function JoinUs() {
  const [index, setIndex] = useState(0);

  const handleNext = () => setIndex((index + 1) % professionals.length);
  const handlePrev = () =>
    setIndex((index - 1 + professionals.length) % professionals.length);

  const current = professionals[index];

  return (
    <div className="bg-darkblue text-white section-spacing px-8 md:px-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center component-spacing">
        <div className="text-h1 mb-6 md:mb-0 !text-white">
          Are You a Service Professional?
        </div>
        <Link href="/join-us">
          <Button className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#1E2A63] px-6 py-3 rounded-lg font-medium transition-colors" variant="primary">
            Join Us!
          </Button>
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div className="w-full md:w-1/2 max-w-md">
          <div className="rounded-3xl flex items-center aspect-square">
            <Image
              src={current.image}
              alt={current.name}
              width={350}
              height={350}
              className="rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-white">
          <h2 className="text-h2 element-spacing !text-white">
            {current.name}
          </h2>
          <div className="border-b border-white w-full max-w-md mb-6"></div>
          <p className="text-body !text-white leading-relaxed mb-8 max-w-lg">
            {current.bio}
          </p>
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#1E2A63] transition-colors font-medium"
            >
              {"<"}
            </button>
            <span className="text-lg font-medium">{`0${index + 1}`}</span>
            <button
              onClick={handleNext}
              className="border-2 border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#1E2A63] transition-colors font-medium"
            >
              {">"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
