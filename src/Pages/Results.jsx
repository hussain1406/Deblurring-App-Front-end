import { Helmet } from "react-helmet";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

export default function Results() {
  //   const compareImageUrls = ["1", "2", "3", "4"];
  const compareImageUrls = ["1.jpeg", "2.png"];
  return (
    <>
      <Helmet>
        <title>Results of Deblurring - Image Deblurring App</title>
      </Helmet>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-10 m-4 md:mx-40">
        {compareImageUrls.map((value, index) => (
          <div className="h-[500px]" key={index}>
            <ReactCompareSlider
              itemOne={
                <ReactCompareSliderImage
                  src={`/img/results/blur/${value}`}
                  //   src={`/${value}.jpeg`}
                  alt="Image one"
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={`/img/results/clean/${value}`}
                  //   src={`/${value}.jpeg`}
                  alt="Image two"
                />
              }
            />
          </div>
        ))}
      </div>
    </>
  );
}
