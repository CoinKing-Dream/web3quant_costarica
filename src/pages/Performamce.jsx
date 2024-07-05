import $ from "jquery";
import lightbox from "lightbox";
import 'lightbox/dist/css/lightbox.css';
import { useEffect } from "react";

const numbers = Array.from({length:18}, (v, i) => i + 1);
const imageLink = "../assets/image/performance_";

const Performance = () => {
    

    useEffect(() => {
        if (typeof window!== 'undefined') {
          lightbox.init();
    
          lightbox.option({
            'wrapAround': true,
            'albumLabel': ' %1 / total %2 '
          })
        }
    
        const fadeAnime = () => {
          $('.gallery li').each(function() {
            var elemPos = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll >= elemPos - windowHeight) {
              $(this).addClass('flipLeft');
            } else {
              $(this).removeClass('flipLeft');
            }
          });
        };
    
        fadeAnime();
    
        $(window).scroll(fadeAnime);
    
        return () => {
          $(window).off('scroll', fadeAnime);
        };
      }, []);

  return (
    <>
      <div className="flex justify-center w-screen pt-16">
        <div className="flex flex-col text-left w-[50%] gap-5">
          <div className="big-title">Performance</div>
          <div className="general-text leading-normal">
            Here is Web3Quant indicator performance.
          </div>
        </div>
      </div>

      <div>
      <lightboxStyles />
      <header className="header">
        <h1>sample</h1>
      </header>
      <div className="wrapper">
        <h2>複数画像を並列に見せる</h2>
        <ul className="gallery" >
          {
            numbers.map((number) => {
              return (
                <li>
                  <Link href={imageLink +  String(number) + ".png"}
                    data-lightbox={"gallery1"}
                    data-title={"グループ3キャプション"}>
                    <Image 
                      src={imageLink +  String(number) + ".png"}
                      width={1000}
                      height={1000}
                      alt="" />                    
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </div>
    </div>
    </>
  );
};

export default Performance;
