import { useState } from "react";

const CarouselComponent = () =>{

    const [currentImage,setCurrentImage] = useState(["https://picsum.photos/id/237/200/300","https://picsum.photos/id/238/200/300","https://picsum.photos/id/239/200/300","https://picsum.photos/id/240/200/300"]);
    const [imgIndex,setImgIndex] = useState(0);

    return (
        <>
            <h1>Carousel Component</h1>
            <div>
                <img src={currentImage[0]} alt="random image"/>
                <div>
                    <button>Back</button>
                    <button>Front</button>
                </div>
            </div>
        </>
    )
}

export default CarouselComponent;