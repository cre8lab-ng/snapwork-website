import Image from "next/image";
import Icon from "./icon";

export default function Home() {
  const features = ["Now in 7 locations", "Loved by 100+", "Growing daily"];

  return (
    <div className="flex flex-col items-center justify-center section-spacing px-4 min-h-screen">
      <h2 className="text-h1 text-center text-white">
        Snapwork in your city
      </h2>
      <div className="flex justify-center component-spacing">
        <Icon name="underline" color="stroke-orange-100" />
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full px-4 element-spacing">
        <div className="flex-1 rounded-xl overflow-hidden max-w-[800px]">
          <Image
            src="/images/city-map.svg"
            alt="Snapwork Locations Map"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-1 flex-1 max-w-[400px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-400 px-4 py-3 rounded shadow flex items-center justify-between gap-2"
            >
              <span className="text-white font-bold text-h3">{feature}</span>
              <Image
                src="/images/check.svg"
                alt="Feature Check"
                width={30}
                height={30}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
