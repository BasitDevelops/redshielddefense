"use client";
import Breadcrumb from "@/common/breadcrumb";
import ServicesDetailsContent from "./services-details-area";
import Header from "@/layout/headers/header";
import complete_services_data from "@/data/complete-services-data";
import { usePathname } from "next/navigation";

const ServicesDetails = () => {
  const currentRoute = usePathname();

  const service = complete_services_data.find(
    (service) => service.path === currentRoute
  );

  return (
    <>
      <Header />
      <main>
        <Breadcrumb spyware={service?.main_title} sm_title="Services" />
        <ServicesDetailsContent
          img={service?.img}
          title={service?.title}
          desc={service?.desc}
          title_2={service?.title_2}
          desc_2={service?.desc_2}
          steps={service?.steps}
        />
      </main>
    </>
  );
};

export default ServicesDetails;
