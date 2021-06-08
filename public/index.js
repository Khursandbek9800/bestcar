import React from "react";
import Mobile from "./vectorIcons/mobile.jsx";
import ArrowBack from "./vectorIcons/sliderBack.jsx";
import ArrowNext from "./vectorIcons/sliderNext";
import SoftIllustration from "./vectorIcons/softIllustration.jsx";
import Vestor from "./vectorIcons/vestor";
import WebIllustrartion from "./vectorIcons/webIllustrartion";
import Asset from "./vectorIcons/asset";

const Svg = ({ type, ...props }) => {
  switch (type) {
    case "arrowBack":
      return <ArrowBack {...props} />;
    case "arrowNext":
      return <ArrowNext {...props} />;
    case "vestor":
      return <Vestor {...props} />;
    case "mobile":
        return <Mobile {...props} />
    case "softIllustration": 
        return <SoftIllustration {...props}/>
    case "webIllustrartion":
      return <WebIllustrartion {...props}/>
    default:
      return null;
  }
};

export default Svg;
