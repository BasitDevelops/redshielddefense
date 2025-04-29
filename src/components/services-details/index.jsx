"use client";
import Breadcrumb from "@/common/breadcrumb";
import ServicesDetailsContent from "./services-details-area";
import Header from "@/layout/headers/header";
import complete_services_data from "@/data/complete-services-data";
import { notFound, usePathname } from "next/navigation";

const ServicesDetails = () => {
  const currentRoute = usePathname();

  const service = complete_services_data.find(
    (service) => service.path === currentRoute
  );

  if (!service) {
    notFound();
  }

  return (
    <>
      <Header />
      <main>
        <Breadcrumb spyware={service?.main_title} sm_title="Services" />
        <ServicesDetailsContent
          img={service?.img}
          img_alt={service?.img_alt}
          title={service?.title}
          desc={service?.desc}
          title_2={service?.title_2}
          desc_2={service?.desc_2}
          title_3={service?.title_3}
          desc_3={service?.desc_3}
          steps={service?.steps}
          list={service?.list}
          desc_3_2={service?.desc_3_2}
          title_4={service?.title_4}
          img_2={service?.img_2}
          img_2_alt={service?.img_2_alt}
          desc_4={service?.desc_4}
          list_2={service?.list_2}
          desc_5={service?.desc_5}
          list_3={service?.list_3}
          title_6={service?.title_6}
          desc_6={service?.desc_6}
          title_7={service?.title_7}
          desc_7={service?.desc_7}
          faqs={service?.faqs}
          // metadata={service?.metadata}
        />
      </main>
    </>
  );
};

export default ServicesDetails;
