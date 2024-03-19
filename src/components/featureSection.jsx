import React from "react";
import { BoltIcon, 
    CalendarDaysIcon, 
    UsersIcon 
  } from "@heroicons/react/24/outline"

const FeatureSection = () => {
    const primaryFeatures = [
        {
          name: "Fishing Spot Monitoring",
          description:
            "Non quo aquam puram repellendus piscis est. Fluctus aut tranquillitas aut ut sit natura. Ex mare magnifico. Sit nobis consequatur piscandi gaudium incidunt.",
          href: "#",
          icon: BoltIcon,
        },
        {
          name: "Fishing Collaboration",
          description:
            "Vero eum piscatum aliquid societatis voluptatem. Vitae esse maritima. Marina nihil deserunt eos quasi societas. A inventore et naturae consortium.",
          href: "#",
          icon: UsersIcon,
        },
        {
          name: "Fishing Task Scheduling",
          description:
            "Et quod piscator dolorem quaerat itineris architecto aquae accusantium. Ex adiunctis et pescandi artibus autem quia flumen. Quis eos piscandi artem at tempestas impedit.",
          href: "#",
          icon: CalendarDaysIcon,
        },
      ]
    return (
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-400">Cast Further</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Everything you need for your premium fishing experience
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                 Piscis ipsum flumen sit amor, capturae splendidum. Mirabilis unda voluptatem piscatorum 
                 magnifico in fluminibus serenitatis.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                {primaryFeatures.map((feature) => (
                  <div key={feature.name} className="flex flex-col">
                    <dt className="text-base font-semibold leading-7 text-white">
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </div>
                      {feature.name}
                    </dt>
                    <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-300">
                      <p className="flex-auto">{feature.description}</p>
                      <p className="mt-6">
                        <a href={feature.href} className="text-sm font-semibold leading-6 text-indigo-400">
                          Learn more <span aria-hidden="true">→</span>
                        </a>
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
  
    )
}

export default FeatureSection;