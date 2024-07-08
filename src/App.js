import React from "react";

import Accordion from "./Components/Accordion/Accordion";
import Accordion1 from "./Components/Accordion/Accordion1";
import AccordionController from "./Components/Accordion/AccordionController";
import Box from './Components/Box'
import CarouselComponent from "./Components/Carousel/CarouselComponent";
import Count from './Components/Counter/counter';
import FolderTreeStructure from "./Components/FolderTreeStructure/FolderTreeStructure";
import PaginationController from "./Components/Pagination/PaginationController";
import ToDo from "./Components/ToDoApp/ToDo";
import TogglingDiv from "./Components/PlayingDivs/ToggleDivs";

// Local Data imports
import { folderStructureData } from "./MockData/folderStructureData";



export default function App() {

  return (
    <div>
      {/* <TogglingDiv/>
       */}
       {/* <Accordion/> */}
       {/* <AccordionController/> */}
       {/* <Accordion1/> */}
       {/* <CarouselComponent/> */}
       {/* <PaginationController/> */}
       <FolderTreeStructure folderStructureData={folderStructureData}/>
    </div>
  );
}
