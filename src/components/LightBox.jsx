import { useEffect } from "react";
import lightbox from "lightbox2";
import "lightbox2/dist/css/lightbox.css";

const LightBox = ({ imageData }) => {
  useEffect(() => {
    // Initialize Lightbox2
    lightbox.init();
    lightbox.option({
      showCaption: true,
      showTitle: false,
      alwaysShowNavOnTouchDevices: true,
      enableEscapeKey: true,
      enableKeyboardControls: true,
      wrapAround: true,
      resizeDuration: 200,
      albumLabel: " %1 / total %2 ",
    });

    // Function to open the lightbox
    
  }, []);

  return (
    <div>
      <lightboxStyles />
      <ul>
        {imageData.map((item) => {
          return (
            <li className="py-4 text-center">
              <a
                href={item.link}
                data-lightbox="example"
                data-title={item.caption}
              >
                <img
                  src={item.link}
                  alt=""
                  onClick={() => lightbox.openImage(item.link)}
                  width={1000}
                />
              </a>
              {item.caption && <div className="py-1">{item.caption}</div>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LightBox;
