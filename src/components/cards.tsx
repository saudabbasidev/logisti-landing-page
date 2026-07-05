import { Container, Truck, Plane, Package, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Container Provide",
    description:
      "Containerized cargo means general or wares that are shipped in reusable, commercial sized shipping containers.",
    color: "bg-yellow-400",
    icon: Container,
  },
  {
    title: "Road Freight",
    description:
      "Road transport means transportation of goods and personnel from one place to the other on roads.",
    color: "bg-orange-500",
    icon: Truck,
  },
  {
    title: "Air Freight",
    description:
      "Air freight parcel delivery is the transfer and shipment of goods via an air carrier, which may be charter or commercial.",
    color: "bg-blue-500",
    icon: Plane,
  },
  {
    title: "Cargo Freight",
    description:
      "Cargo, also known as freight, refers to goods or produce being transported from one place to another.",
    color: "bg-green-500",
    icon: Package,
  },
];

export default function ServicesSection() {
  return (
    <section className=" py-20">
      <div className="mx-auto px-6">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                data-aos="fade-up"
                className={`${service.color} rounded-3xl px-6 py-3 sm:h-[250px] h-auto flex flex-col justify-between transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl`}
              >
                {/* Top */}
                <div>
                  <div className=" flex h-14 w-14 items-center justify-center rounded-full bg-slate-900 text-white">
                    <Icon size={24} strokeWidth={2} />
                  </div>

                  <h3 className="mt-2 font-bold text-2xl max-sm:text-lg text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm max-sm:text-xs font-light  text-slate-900/90">
                    {service.description}
                  </p>
                </div>

                {/* Bottom */}
                <div className="flex justify-end">
                  <button className="btn btn-circle btn-outline border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                    <ArrowUpRight size={18} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
