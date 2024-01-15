import React, { useState } from "react";
import Carousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3 },
  { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  { width: 1450, itemsToShow: 5 },
  { width: 1750, itemsToShow: 6 },
];

const Slider = (props) => {
  return (
    <Carousel itemsToShow={1} breakPoints={breakPoints} pagination={false}>
      {props.children}
    </Carousel>
  );
};

export default Slider;
