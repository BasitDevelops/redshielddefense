"use client";
import ServicesDetails from "@/components/services-details";
import complete_services_data from "@/data/complete-services-data";
import { usePathname } from "next/navigation";

// export const getStaticPaths = async () => {
//   const data = complete_services_data;

//   const paths = data.map((service) => ({
//     params: { path: service.path.toString() },
//   }));

//   return { paths, fallback: false };
// };

// export const getStaticProps = async (context) => {
//   const currentRoute = usePathname();
//   const path = context.params.path;

//   const data = complete_services_data.map((service) => {
//     if (service.path === currentRoute) {
//       return service;
//     }
//     return;
//   });

//   return { props: { service: data } };
// };

const page = () => {
  return (
    <>
      <ServicesDetails />
    </>
  );
};

export default page;
