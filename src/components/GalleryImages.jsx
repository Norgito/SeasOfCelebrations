import "../styles/Gallery.css";
import FsLightbox from "fslightbox-react";
import { useState, useEffect } from "react";
import Img1 from "../assets/img/Gallery/Seas01.jpg";
import Img2 from "../assets/img/Gallery/Seas02.jpg";
import Img3 from "../assets/img/Gallery/Seas03.jpg";
import Img5 from "../assets/img/Gallery/Seas05.jpg";
import Img6 from "../assets/img/Gallery/Seas06.jpg";
import Img7 from "../assets/img/Gallery/Seas07.jpg";
import Img8 from "../assets/img/Gallery/Seas08.jpg";
import Img9 from "../assets/img/Gallery/Seas09.jpg";
import Img10 from "../assets/img/Gallery/Seas10.jpg";
import Img11 from "../assets/img/Gallery/Seas11.jpg";
import Img12 from "../assets/img/Gallery/Seas12.jpg";
import Img13 from "../assets/img/Gallery/Seas13.jpg";

const GalleryImages = () => {
  const [toggler, setToggler] = useState(false);
  // create a state variable for sourceIndex and a setter function
  const [sourceIndex, setSourceIndex] = useState(1);

  const images = [
    Img1,
    Img2,
    Img3,
    Img5,
    Img6,
    Img7,
    Img8,
    Img9,
    Img10,
    Img11,
    Img12,
    Img13,
  ];

  // add this useEffect hook
  useEffect(() => {
    // get all the <a> elements with data-fslightbox attribute
    const links = document.querySelectorAll("a[data-fslightbox]");
    // loop through them and add a click event listener
    for (let link of links) {
      link.addEventListener("click", (e) => {
        // prevent the default behavior of opening the image in a new tab
        e.preventDefault();
      });
    }
  }, []);

  return (
    <div>
      <div className="wrap">
        <div className="gallery col-3">
          {images.map((image, index) => (
            <a
              key={index}
              className="item"
              href={image}
              data-fslightbox="gallery"
            >
              <div
                // update the sourceIndex and toggler state when clicking on an image
                onClick={() => {
                  setSourceIndex(index); // add 1 because sourceIndex starts from 1
                  setToggler(!toggler);
                }}
                className="img rounded-xl"
                style={{
                  backgroundImage: `url(${image.replace("/thumbs/", "/")})`,
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={images}
        key={images.length}
        sourceIndex={sourceIndex}
      />
    </div>
  );
};

export default GalleryImages;
