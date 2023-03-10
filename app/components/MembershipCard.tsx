interface MembershipCardProps {
    level: string;
    description: string;
    price: string;
  }
  
  export default function MembershipCard({ level, description, price }: MembershipCardProps) {
    return (
      <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
        <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
          {level}
        </h2>
        <dl>
          <dt className="bold mb-1 text-xs uppercase text-amber-900">
            Description
          </dt>
          <dd className="mb-3 text-neutral-600">
            {description}
          </dd>
          <dt className="bold mb-1 text-xs uppercase text-amber-900">
            Price
          </dt>
          <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
            {price}
          </dd>
        </dl>
      </li>
    );
  }