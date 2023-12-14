import dynamic from "next/dynamic";
import portfolioQuery from "../sanity/queries";
import { sanityClient } from "@/sanity/sanity.client";
const HomePage = dynamic(() => import("./HomePage"), {ssr: false});

export const revalidate = 30

async function getData() {
  return sanityClient.fetch(portfolioQuery);
}

export default async function page() {
  const data = await getData();
  return (
    <>
      <HomePage data={data} />
    </>
  );
}
