import React from "react";

import Box from './Components/Box'
import Count from './Components/Counter/counter';
import ToDo from "./Components/ToDoApp/ToDo";
import TogglingDiv from "./Components/PlayingDivs/ToggleDivs";
import Accordion from "./Components/Accordion/Accordion";
import CarouselComponent from "./Components/Carousel/CarouselComponent";
import Accordion1 from "./Components/Accordion/Accordion1";

export default function App() {
  return (
    <div>
      {/* <TogglingDiv/>
       */}
       {/* <Accordion/> */}
       <Accordion1/>
       {/* <CarouselComponent/> */}
    </div>
  );
}
