export const addUseUserSnippet = `import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import MembershipCard from "~/components/MembershipCard";
import { getMemberships } from "~/models/membership.server";
import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return json({ memberships: await getMemberships() });
};

export default function Memberships() {
  const { memberships } = useLoaderData<typeof loader>();
  const user = useUser();

  return (
    <div className="min-h-screen bg-amber-200 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Memberships
      </h1>
      <ul className="mx-auto max-w-xl p-4">
        {memberships.map(({ level, description, price }) => (
          <MembershipCard
            key={level}
            level={level}
            description={description}
            price={price}
          />
        ))}
      </ul>
    </div>
  );
}`;
