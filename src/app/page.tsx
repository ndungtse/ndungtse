import { Metadata } from "next";
import { projectQuery } from "../lib/queries";
import { clientFetch } from "../lib/sanity.server";
import PageIndex from "./PageIndex";

// export const metadata: Metadata = {
//   title: "Ndungutse Charles",
//   description: "Generated by Next.js",
// };

async function getRecent() {
  const recent = await clientFetch(projectQuery);
  console.log("recent", recent);
  return recent;
}

export default async function Index() {
  const recent = await getRecent();
  return <PageIndex recent={recent} />;
}
