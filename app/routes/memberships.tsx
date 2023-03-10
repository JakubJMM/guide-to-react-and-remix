export default function Memberships() {
  return (
    <div className="min-h-screen bg-amber-200 p-4">
      <h1 className="mb-4 text-center font-serif text-4xl font-extrabold text-red-900">
        Memberships
      </h1>
      <ul className="mx-auto max-w-xl p-4">
        <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-4 font-serif text-2xl font-extrabold tracking-wide text-green-900">
            Basic
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">
              1 martial art - 2 sessions per week. Monthly fee.
            </dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
              £25.00
            </dd>
          </dl>
        </li>
        <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-green-900">
            Intermediate
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">
              1 martial art - 3 sessions per week. Monthly fee.
            </dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
              £35.00
            </dd>
          </dl>
        </li>
        <li className="mb-4 rounded-lg bg-white p-4 text-center shadow-lg transition-all last-of-type:mb-0 hover:scale-105 hover:cursor-pointer">
          <h2 className="mb-3 font-serif text-2xl font-extrabold tracking-wide text-green-900">
            Advanced
          </h2>
          <dl>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Description
            </dt>
            <dd className="mb-3 text-neutral-600">
              any 2 martial arts - 5 sessions per week. Monthly fee.
            </dd>
            <dt className="bold mb-1 text-xs uppercase text-amber-900">
              Price
            </dt>
            <dd className="mb-3 font-serif text-xl font-extrabold text-red-800">
              £45.00
            </dd>
          </dl>
        </li>
      </ul>
    </div>
  );
}
