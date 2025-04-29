import ServicesDetails from "@/components/services-details";
import complete_services_data from "@/data/complete-services-data";

export async function generateMetadata({ params }) {
  const p = await params;

  const post = complete_services_data.find(
    (service) => service?.path === `/services/${p?.serviceType}/${p?.serviceId}`
  );

  return post
    ? {
        title: post?.metadata?.title,
        description: post?.metadata.desc,
        openGraph: {
          title: post?.metadata?.title,
          description: post?.metadata?.desc,
          url: `https://redshielddefense.vercel.app${post?.path}`,
          images: [{ url: post?.img }],
        },
        keywords: post?.metadata?.keywords,
      }
    : { title: "Post Not Found", description: "No content available." };
}

export async function generateStaticParams() {
  return complete_services_data.map((service) => ({
    serviceType: service.path.split("/")[2],
    serviceId: service.path.split("/")[3],
  }));
}

const page = () => {
  return (
    <>
      <ServicesDetails />
    </>
  );
};

export default page;
