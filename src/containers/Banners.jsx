import Banner from "../componets/Banner";
import { BannerDetails } from "../constants/constant";

const Banners = () => {
  return (
    <div className="grid grid-cols-1 mx-2 gap-y-4 md:grid-cols-2 lg:grid-cols-3 gap-x-4 lg:mx-6">
      {BannerDetails.map((item, index) => (
        <Banner key={index} {...item} />
      ))}
    </div>
  );
};

export default Banners;
