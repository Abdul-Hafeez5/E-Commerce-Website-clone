import React from "react";
import { about_5 } from "../../assets/About";

const OurPartners = () => {
  return (
    <div className="py-6 mx-2 xs:mx-6">
      <div className="flex flex-col items-center gap-y-6 gap-x-6 lg:flex-row">
        <div className="w-full h-full">
          <img src={about_5} alt="" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-col font-quickSand gap-y-4">
          <h2 className="text-2xl font-bold leading-7 text-secondary">
            Our performance
          </h2>
          <h1 className="text-[48px] font-bold leading-[56px]">
            Your Partner for e-commerce grocery solution
          </h1>
          <p className="font-lato text-secondary">
            Ed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto Pitatis et
            quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
          </p>
        </div>
      </div>
      <div className="flex ">
        <div>
          <h1>Who we are</h1>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
        <div>
          <h1>Our history</h1>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
        <div>
          <h1>Our mission</h1>
          <p>
            Volutpat diam ut venenatis tellus in metus. Nec dui nunc mattis enim
            ut tellus eros donec ac odio orci ultrices in. ellus eros donec ac
            odio orci ultrices in.
          </p>
        </div>
      </div>
      <div>large image</div>
    </div>
  );
};

export default OurPartners;
