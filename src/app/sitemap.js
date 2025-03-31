import complete_services_data from "@/data/complete-services-data";

export default async function sitemap() {
  const services = complete_services_data.map((service) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/${
      service.path.split("/")[2]
    }/${service.path.split("/")[3]}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/about-us`,
    },
    ...services,
    { url: `${process.env.NEXT_PUBLIC_BASE_URL}/contact` },
  ];
}
