import portfolioQuery from "../sanity/queries";
import { sanityClient } from "@/sanity/sanity.client";
import HomePage from "./HomePage";

async function getData() {
  return sanityClient.fetch(portfolioQuery);
}

export default async function page() {
  const data = await getData();
  console.log(data);

  return (
    <>
      <HomePage data={data} />
    </>
  );
}
