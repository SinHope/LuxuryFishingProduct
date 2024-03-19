import React from "react";
import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from "@heroicons/react/20/solid"
import featureTwoPic from "../images/logos/sharingiscaring1.png"

const FeatureSection2 = () => {
    const secondaryFeatures = [
        {
          name: "Cast to Catch.",
          description: "Piscatus ipsum, dolor sit amet consectetur piscator elit aute id flumen magnus.",
          icon: CloudArrowUpIcon,
        },
        {
          name: "Fishing Licenses.",
          description: "Anim piscator id flumen magna aliqua ad ad non piscandum sunt. Qui irure qui hamo cupidatat navigatio.",
          icon: LockClosedIcon,
        },
        {
          name: "Tackle Organization.",
          description: "Ac tincidunt sapien vehicula erat nassa auctor pellentesque rivus.",
          icon: ArrowPathIcon,
        },
        {
          name: "Advanced Techniques.",
          description: "Piscatus ipsum, dolor sit amet consectetur piscator elit aute id flumen magnus.",
          icon: FingerPrintIcon,
        },
        {
          name: "Powerful Sona.",
          description: "Anim piscator id flumen magna aliqua ad ad non piscandum sunt. Qui irure qui sonar cupidatat navigatio.",
          icon: Cog6ToothIcon,
        },
        {
          name: "Catch Records.",
          description: "Ac tincidunt sapien vehicula erat logbook auctor pellentesque rivus.",
          icon: ServerIcon,
        },
      ]
      
    return (
        <div className="mt-32 sm:mt-56">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl sm:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything You Need for the Perfect Catch</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">No Boat? No Problem</p>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                    Piscatorum ipsum, unda sit amet natura piscandi elit. Maximos retia perferendis suscipit aqua, 
                    unda dolor hamo blanditiis
                </p>
              </div>
            </div>
            <div className="relative overflow-hidden pt-16">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <img
                  src={featureTwoPic}
                  alt="App screenshot"
                  className="mb-[-12%] ml-48 rounded-xl shadow-xl ring-1 ring-white/10 w-100 h-auto"
                />
                <div className="relative" aria-hidden="true">
                  <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-neutral-900 pt-[7%]" />
                </div>
              </div>
            </div>
            <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
              <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                {secondaryFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-white">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
    )
}

export default FeatureSection2;