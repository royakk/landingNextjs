import React from 'react'
import SliderImage from "react-zoom-slider";

export default function zoom() {
    const data = [
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-1-org.jpg",
          text: "img1"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-4-org.jpg",
          text: "img2"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/209800/oppo-reno2-f-xanh-10-org.jpg",
          text: "img3"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-mau-bac-1-org.jpg",
          text: "img4"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/210653/iphone-11-pro-max-256gb-mau-bac-6-org.jpg",
          text: "img5"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-1-org.jpg",
          text: "img6"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-10-org.jpg",
          text: "img7"
        },
        {
          image:
            "https://cdn.tgdd.vn/Products/Images/42/221926/huawei-y6p-xanh-12-org.jpg"
          // text: "img8"
        }
      ];
  return (
    <div>
 <SliderImage
    data={data}
    // width='50rem'
    showDescription={true}
    direction="right"
  />
  </div>
  )
}
