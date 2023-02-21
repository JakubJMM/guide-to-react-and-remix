export const basicUserIdLoader = `import { LoaderArgs } from "@remix-run/node";
import MembershipCard from "~/components/MembershipCard";
import { requireUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return null;
};

export default function Memberships() {
  [...]`;
