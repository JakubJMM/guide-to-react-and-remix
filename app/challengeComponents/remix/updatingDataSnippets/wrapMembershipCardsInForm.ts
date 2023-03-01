export const wrapMembershipCardsInFormSnippet = `import { json, LoaderArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";

// [...lots of other imports and our loader function here...]

export default function Memberships() {
  const { memberships } = useLoaderData<typeof loader>();
  const user = useUser();

  const handleChange = (event: React.FormEvent<HTMLFormElement>) => {
    console.log('Form changed!')
  };

  return (
    <div className="min-h-screen bg-amber-200 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Memberships
      </h1>
      <Form method="post" onChange={(event) => handleChange(event)}>
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
      </Form>
    </div>
  );
}`;
