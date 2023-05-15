import { useState, useEffect } from "react";
import "../styles/Gallery.css";
import FsLightbox from "fslightbox-react";

const GalleryImages = () => {
  const [toggler, setToggler] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(1);

  const images = [
    "https://i.imgur.com/syyH46l.jpg",
    "https://i.imgur.com/syyH46l.jpg",
    "https://i.imgur.com/syyH46l.jpg",
  ];

  useEffect(() => {
    const links = document.querySelectorAll("a[data-fslightbox]");

    for (let link of links) {
      link.addEventListener("click", (e) => {
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
                onClick={() => {
                  setSourceIndex(index);
                  setToggler(!toggler);
                }}
                className="img rounded-xl"
                style={{
                  backgroundImage: `url(${image})`,
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
