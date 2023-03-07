export const addUseSubmitSnippet = `import { json, LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData, useSubmit } from "@remix-run/react";

// [...other imports and loader function here...]

export default function Memberships() {
  const { memberships } = useLoaderData<typeof loader>();
  const user = useUser();
  const submit = useSubmit();

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    submit(event.currentTarget, { replace: true });
  };

  return (
    <div className="min-h-screen bg-amber-200 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Memberships
      </h1>
      <Form method="post" onChange={(event) => handleChange(event)}>

        // [...MembershipCard code goes here...]

      </Form>
    </div>
  );
}`;

export const addTestActionFunctionSnippet = `import { ActionArgs, json, LoaderArgs } from "@remix-run/node";

// [...lots of imports here...]

export const loader = async ({ request }: LoaderArgs) => {
  await requireUserId(request);

  return json({ memberships: await getMemberships() });
};

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const membershipId = formData.get("memberships");
  const userId = formData.get("userId");

  console.log({ membershipId, userId });

  return null;
}

export default function Memberships() {

  // [...the rest of the Memberships page code goes here...]

}`;

export const updateUserMembershipSnippet = `interface UpdateUserMembershipArgs {
  userId: string;
  membershipId: string;
}
export async function updateUserMembership({
  userId,
  membershipId,
}: UpdateUserMembershipArgs) {
  return prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      membershipId,
    },
  });
}`;

export const callUpdateUserMembershipsFromAction = `// [...lots of imports here...]

import invariant from "tiny-invariant";
import {
  getMemberships,
  updateUserMembership,
} from "~/models/membership.server";

  // [...other imports and our loader function here...]

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const membershipId = formData.get("memberships");
  const userId = formData.get("userId");

  invariant(
    typeof membershipId === "string",
    "membershipId must be present and a string value"
  );
  invariant(
    typeof userId === "string",
    "userId must be present and a string value"
  );

  await updateUserMembership({ userId, membershipId });

  return null;
}

// [...the rest of our Memberships component code here...]`;
