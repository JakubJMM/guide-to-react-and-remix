export const getMembershipsSnippet = `import { prisma } from "~/db.server";

export async function getMemberships() {
  return prisma.membership.findMany();
}`;

export const loadMembershipsOnPage = `import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MembershipCard from "~/components/MembershipCard";
import { getMemberships } from "~/models/membership.server";
import { requireUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return json({ memberships: await getMemberships() });
};

export default function Memberships() {
  const { memberships } = useLoaderData<typeof loader>();
  console.log({ memberships });

  // [...the rest of your code follows here...]`;
