import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../images/slide1.jpg";
import hero from "../images/hero.jpg";
import beantobrew from "../images/beantobrew.jpg";

const images = [
  { src: slide1, caption: "Freshly Brewed Mornings" },
  { src: hero, caption: "Aromatic Coffee Moments" },
  { src: beantobrew, caption: "From Bean to Brew" },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    caption: "Sunrise Over Coffee Fields",
  },
  {
    src: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    caption: "Pour Over Perfection",
  },
  {
    src: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    caption: "Chilled Cold Brew",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    caption: "Latte Art Magic",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const SlickSlider = () => (
  <div style={{ maxWidth: 1200, margin: "2rem auto" }}>
    <Slider {...settings}>
      {images.map((img, idx) => (
        <div
          key={idx}
          style={{
            padding: "0 20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              background: "#fffbe7",
              borderRadius: 12,
              boxShadow: "0 4px 24px rgba(181, 136, 104, 0.13)",
              overflow: "hidden",
              textAlign: "center",
              width: 250,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img
              src={img.src}
              alt={img.caption}
              style={{
                width: 220,
                height: 180,
                objectFit: "cover",
                marginBottom: 12,
                borderRadius: 8,
              }}
            />
            <div
              style={{
                background: "rgba(92, 64, 51, 0.7)",
                color: "#fffbe7",
                fontWeight: 600,
                fontSize: "1.1rem",
                padding: "0.5rem 1rem",
                borderRadius: "0 0 12px 12px",
                minHeight: 48,
              }}
            >
              {img.caption}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  </div>
);

export default SlickSlider;
