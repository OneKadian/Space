// import { currentUser } from "@clerk/nextjs";
import ToggleTable2 from "../sub/PricingTableToggler";
const PricingTable = async () => {
  //   const user = await currentUser();

  return (
    <div className="py-24 lg:py-32">
      <div className="space-y-3 mb-12 text-center p-2" id="pricing-section2">
        <h2 className="text-3xl lg:text-4xl mb-2 font-semibold text-white sm:leading-[55px] sm:tracking-tight">
          <span>Pricing</span>
        </h2>
        <p className="mb-5 font-light text-gray-300 sm:text-xl">
          Buy once, Launch forever
        </p>
        <ToggleTable2 userd={true} />
      </div>
    </div>
  );
};

export default PricingTable;
