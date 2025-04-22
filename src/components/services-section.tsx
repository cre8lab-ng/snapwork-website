import Icon from "./icon";

interface Service {
  title: string;
  icon: string;
}

const services: Service[] = [
  { title: "Inverter Repair & install", icon: "inverter-repair" },
  { title: "Plumbing", icon: "plumbing" },
  { title: "Generator Repair & install", icon: "generator-repair" },
  { title: "Makeup Services", icon: "makeup-services" },
  { title: "Laundry & Dry Cleaning", icon: "laundry-drycleaning" },
  { title: "Cleaning Services", icon: "cleaning-services" },
  { title: "Catering Services", icon: "catering-services" },
  { title: "Hair Services", icon: "hair-services" },
  { title: "Fashion Designer", icon: "fashion-designer" },
  { title: "Electrical Services", icon: "electrical-services" },
];

export default function ServicesSection() {
  return (
    <section className=" py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold ">Our Services</h2>
        <div className="w-6 h-1  mx-auto mt-2 rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-y-12 gap-x-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-3"
          >
            <Icon name={service.icon} />
            <p className="text-sm font-medium text-gray-800 leading-tight">
              {service.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
