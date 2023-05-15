import { useState } from "react";
import "../styles/Gallery.css";
import FsLightbox from "fslightbox-react";

// Use a custom hook to handle the lightbox logic
const useLightbox = () => {
  const [toggler, setToggler] = useState(false);
  const [sourceIndex, setSourceIndex] = useState(0);

  const openLightbox = (index) => {
    setSourceIndex(index);
    setToggler(!toggler);
  };

  return [toggler, sourceIndex, openLightbox];
};

const GalleryImages = () => {
  // Use the custom hook
  const [toggler, sourceIndex, openLightbox] = useLightbox();

  const images = [
    {
      src: "https://i.imgur.com/syyH46l.jpg",
      thumb: "https://i.imgur.com/syyH46l.jpg",
    },
    {
      src: "https://i.imgur.com/TEFKo5h.jpg",
      thumb: "https://i.imgur.com/TEFKo5h.jpg",
    },
    {
      src: "https://i.imgur.com/BFeLhll.jpg",
      thumb: "https://i.imgur.com/BFeLhll.jpg",
    },
  ];

  return (
    <div>
      <div className="wrap">
        <div className="gallery col-3">
          {images.map((image, index) => (
            <a
              // Use a unique identifier as a key, such as the image source
              key={image.src}
              className="item"
              href={image.src}
              data-fslightbox="gallery"
            >
              <div
                onClick={() => openLightbox(index)}
                className="img rounded-xl"
                style={{
                  backgroundImage: `url(${image.thumb})`,
                }}
              />
            </a>
          ))}
        </div>
      </div>

      <FsLightbox
        toggler={toggler}
        sources={images.map((image) => image.src)}
        key={images.length}
        sourceIndex={sourceIndex}
      />
    </div>
  );
};

export default GalleryImages;
