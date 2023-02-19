interface MembershipCardProps {
  level: string;
  description: string;
  price: string;
}

function MembershipCard({ level, description, price }: MembershipCardProps) {
  return (
    <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
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
    </li>
  );
}

export default function Memberships() {
  return (
    <div className="min-h-screen bg-amber-200 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Memberships
      </h1>
      <ul className="mx-auto max-w-xl p-4">
        <MembershipCard
          level="Basic"
          description="1 martial art - 2 sessions per week. Monthly fee."
          price="£25.00"
        />
        <MembershipCard
          level="Intermediate"
          description="1 martial art - 3 sessions per week. Monthly fee."
          price="£35.00"
        />
        <MembershipCard
          level="Advanced"
          description="Any 2 martial arts - 5 sessions per week. Monthly fee."
          price="£45.00"
        />
      </ul>
    </div>
  );
}
