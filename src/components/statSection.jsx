import React from "react";

const StatSection = () => {
    const stats = [
        { id: 1, name: "Anglers on the Waterway", value: "8,000+" },
        { id: 2, name: "Daily Catches", value: "900m+" },
        { id: 3, name: "Fishability Guarantee", value: "99.9%" },
        { id: 4, name: "Successful Outings", value: "12m" },
      ]
    return(
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base font-semibold leading-8 text-indigo-400">Our Catch Record Trusted by Thousands of Anglers Worldwide</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Trusted by Thousands of Anglers &nbsp;Worldwide
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Piscatus ipsum, dolor sit amet consectetur piscandi passionis elit. Maxima praeda perferendis suscipit aquae, iste dolor capturae dilectio blanditiis ratione.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-white sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.id} className="flex flex-col gap-y-3 border-l border-white/10 pl-6">
              <dt className="text-sm leading-6">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    );
};

export default StatSection;