import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const sliderSettings = {
  autoplay: true, // スライドを自動再生
  autoplaySpeed: 4000,
  infinite: true, // コンテンツループ
  arrows: false, // 「前」「次」のスライドを操作する矢印を非表示
  speed: 500, // スライドアニメーションのスピード
  variableWidth: false,
  draggable: false,
  cssEase: "linear",
  fade: true,
  slidesToShow: 3,
};

const carouselItems = [
  { image: "https://picsum.photos/1200?random=1", alt: "" },
  { image: "https://picsum.photos/1200?random=2", alt: "" },
  { image: "https://picsum.photos/1200?random=3", alt: "" },
];

const sliderContainerStyle = {
  width: "480px", // 任意の幅に調整
  margin: "0 auto", // 中央寄せにする場合
};

/**
 * 画像スライドを表示させるコンポーネント
 */
export const PhotoSlide: React.FC = ({}) => {
  return (
    <div style={sliderContainerStyle}>
      <Slider {...sliderSettings}>
        {carouselItems.map((carouselItem, index) => (
          <div key={index}>
            <img
              src={carouselItem.image}
              alt={carouselItem.alt}
              width="100%" // 画像の幅を100%にすることでスライダーに合わせる
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};
