import React from "react";
import DaiwaLogo from "../images/logos/daiwalogo.png";
import PennLogo from "../images/logos/pennlogo.png";
import EvergreenLogo from "../images/logos/evergreenlogo.png";
import ZenaqLogo from "../images/logos/zenaqlogo.jpg";

const LogoSection = () => {
    const ShimanoLogo ="http://logo-logos.com/2016/11/Shimano_logo.png"
    return (
        <div className="mx-auto mt-8 max-w-7xl px-6 sm:mt-16 lg:px-8">
            <h2 className="text-center text-lg font-semibold leading-8 text-white">
            A Curated Collection of the Finest Luxury Brands And Models
            </h2>
            <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 decoration-white"
                src={DaiwaLogo}
                alt="Transistor"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={ShimanoLogo}
                alt="Reform"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={PennLogo}
                alt="Tuple"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
                src={EvergreenLogo}
                alt="SavvyCal"
                width={158}
                height={48}
              />
              <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
                src={ZenaqLogo}
                alt="Statamic"
                width={158}
                height={48}
              />
            </div>
          </div>
    );
}

export default LogoSection;