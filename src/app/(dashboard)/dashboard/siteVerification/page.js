
import SiteVerificationComponent from "@/components/__dashboard/siteVerificationComponent/SiteVerificationComponent";


export async function getData() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}/api/siteMap`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  return data;
}


export default function SeoSiteVerification() {

  const { data } = getData()


  return (
    <>
      <SiteVerificationComponent data={data} />
    </>
  );
}

