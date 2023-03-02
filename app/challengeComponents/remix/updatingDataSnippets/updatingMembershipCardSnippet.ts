export const updatingMembershipCard = `interface MembershipCardProps {
  membershipId: string;
  userMembershipId: string | null;
  userId: string;
  level: string;
  description: string;
  price: string;
}

export default function MembershipCard({
  membershipId,
  userMembershipId,
  userId,
  level,
  description,
  price,
}: MembershipCardProps) {
  return (
    <label
      htmlFor={membershipId}
      className="mb-4 block rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer"
    >
      <input type="hidden" name="userId" value={userId} />
      <input
        id={membershipId}
        type="radio"
        name="memberships"
        value={membershipId}
        defaultChecked={userMembershipId === membershipId}
      />
      <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
        {level}
      </h2>
      <dl>
        <dt className="bold mb-1 text-xs uppercase text-amber-900">
          Description
        </dt>
        <dd className="mb-3 text-neutral-600">{description}</dd>
        <dt className="bold mb-1 text-xs uppercase text-amber-900">Price</dt>
        <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
          {price}
        </dd>
      </dl>
    </label>
  );
}
`;

export const updatePropsSnippet = `export default function Memberships() {
  const user = useUser();
  // [...opening code to component goes here...]

  return (
    <div className="min-h-screen bg-amber-200 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Memberships
      </h1>
      <Form method="post" onChange={(event) => handleChange(event)}>
        <ul className="mx-auto max-w-xl p-4">
          {memberships.map(({ id, level, description, price }) => (
            <MembershipCard
              key={id}
              userMembershipId={user.membershipId}
              userId={user.id}
              membershipId={id}
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
