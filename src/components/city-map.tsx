import Image from "next/image";

export default function Home() {
  const features = ["Now in 7 locations", "Loved by 100+", "Growing daily"];

  return (
    <div className="flex flex-col items-center justify-center py-10 px-4 bg-[#f3f3fb] min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-center">
        Snapwork in Your City?
      </h1>

      <div className="w-full">
        <div className="rounded-xl overflow-hidden">
          <Image
            src="city-map.svg"
            alt="Snapwork Locations Map"
            width={1600}
            height={800}
            className="w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 text-sm font-medium px-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-blue-400 px-4 py-3 rounded shadow flex items-center justify-center gap-2"
            >
              <span className="text-blue-300 font-bold text-xl">{feature}</span>
              <Image
                src="/check.svg"
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
