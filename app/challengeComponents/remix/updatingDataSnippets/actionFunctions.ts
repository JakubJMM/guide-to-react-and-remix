export const addUseSubmitSnippet = `export default function Memberships() {
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

export const addTestActionFunctionSnippet = `export const loader = async ({ request }: LoaderArgs) => {
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
