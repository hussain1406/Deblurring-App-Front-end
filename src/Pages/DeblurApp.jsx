import {
  CloudArrowUpIcon,
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import {
  Select,
  Option,
  Progress,
  Typography,
  Button,
  Alert,
  Tooltip,
} from "@material-tailwind/react";
import { FileUploader } from "react-drag-drop-files";
import axios from "axios";
import { Helmet } from "react-helmet";

export default function DeblurApp() {
  const custom_image_upload_url = `http://localhost:5500/app`;
  const models = {
    deblur: "Motion Deblurring",
    defocus: "Defocus Deblurring",
    derain: "Derain Deblurring",
  };
  const maxSize = 0.5; // in MBs
  let interval, modelName;
  const [cleanImage, setCleanImage] = useState(null);
  const [loading, setLoading] = useState(null);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);
  const [compareMode, setCompareMode] = useState(null);
  const [uploadImage, setUploadImage] = useState(null);

  function clearCache() {
    setLoading(false);
    setResponse(false);
    setError(false);
    setCompareMode(false);

    setUploadImage(false);
  }
  function handleChange(e) {
    setUploadImage(e);
    setImage(URL.createObjectURL(e));
  }

  function handleSizeError() {
    setError(
      "Max image Size is 500KBs. Please upload a image below this limit"
    );
    setTimeout(() => {
      setError(null);
    }, 3000);
  }

  function handleSubmitimage(e) {
    let fullModelName = document.getElementsByName("modelName")[0].textContent;
    e.preventDefault();

    for (const key of Object.keys(models)) {
      if (models[key] === fullModelName) {
        modelName = key;
        console.log(modelName);
      }
    }

    if (modelName == undefined) {
      setError("Please choose a model!");
      setTimeout(() => {
        setError(null);
      }, 6000);
      return;
    }

    if (image !== null) {
      let formData = new FormData();
      formData.append("inputImage", uploadImage);
      formData.append("modelName", modelName);
      console.log(formData);
      handleLoading(60);
      axios({
        method: "post",
        url: custom_image_upload_url,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) => {
          console.log(`Success`, res);
          setLoading(false);
          clearInterval(interval);
          setResponse(true);
          setCleanImage(`http://127.0.0.1:5500/clean/${res.data.filename}`);
          console.log(res.data.filename);
        })
        .catch((err) => {
          console.log(err);
          setLoading(null);
          clearInterval(interval);
          setResponse(false);
        });
    }
  }
  function toggleCompareMode() {
    if (compareMode === true) {
      setCompareMode(false);
    } else if (compareMode === false) {
      setCompareMode(true);
    }
  }
  function handleLoading(time) {
    console.log(time);
    interval = setInterval(() => {
      console.log("Loading");
      if (time == 0) {
        setLoading(null);
        clearInterval(interval);
      }
      setLoading(time);
      time--;
    }, 1000);
  }
  return (
    <>
      <Helmet>
        <title>Image Deblurring App</title>
      </Helmet>
      {error && (
        <div className="flex justify-center">
          <div className="w-4/5 absolute my-1">
            <Alert
              dismissible
              className="absolute"
              color="red"
            >
              <Typography as="h6" className="font-semibold">
                {error}
              </Typography>
            </Alert>
          </div>
        </div>
      )}
      {response && (
        <>
          {!compareMode && (
            <div className="flex justify-evenly gap-2 mx-6 my-4">
              <figure className="flex flex-col items-center">
                <img
                  className="w-[40vw]  mx-4 rounded-lg shadow-xl shadow-blue-gray-900/50"
                  src={image}
                />
                <Typography
                  as="caption"
                  variant="small"
                  className="mt-2 text-2xl text-center font-bold"
                >
                  Original Image
                </Typography>
              </figure>
              <figure className="flex flex-col items-center">
                <img
                  className="w-[40vw] mx-4 rounded-lg shadow-xl shadow-blue-gray-900/50"
                  src={cleanImage}
                />
                <Typography
                  as="caption"
                  variant="small"
                  className="mt-2 text-center font-bold text-2xl"
                >
                  Clean Image
                </Typography>
              </figure>
            </div>
          )}
          {compareMode && (
            <div className="w-[45vw] block m-auto my-4">
              <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={image} />}
                itemTwo={<ReactCompareSliderImage src={cleanImage} />}
              />
            </div>
          )}
          <div className="flex justify-center gap-4 items-center">
            <Button color="gray" onClick={() => clearCache()}>
              <ArrowLongLeftIcon color="white" className="inline w-6" />
              Go Back to App
            </Button>
            <Button onClick={() => toggleCompareMode()} color="purple">
              {!compareMode ? "See in Comparison mode" : "See in Normal Mode"}
              <ArrowLongRightIcon className="inline w-6" />
            </Button>
          </div>
        </>
      )}

      {!response && (
        <form
          className="flex flex-col"
          method="POST"
          encType="multipart/form-data"
          onSubmit={handleSubmitimage}
        >
          <div className="flex 2xl:mx-40 xl:mx-20 mx-3 my-10 flex-col lg:flex-row rounded-3xl">
            <div className="text-white font-body left w-full lg:w-3/4 text-center lg:h-[500px]">
              <div className=" ">
                <div className="flex justify-center flex-col items-center h-[300px] md:h-[300px] lg:h-[500px] rounded-3xl  bg-purple-50">
                  {!image && (
                    <FileUploader
                      name="inputImage"
                      classes={`!lg:h-[500px] !border-none flex justify-center items-center !text-gray-900 !min-w-full !rounded-l-3xl !rounded-none `}
                      types={["png", "jpg", "jpeg", "bmp"]}
                      required={true}
                      handleChange={handleChange}
                      hoverTitle="Drop Here"
                      maxSize={maxSize}
                      onSizeError={handleSizeError}
                    >
                      <Typography
                        as="label"
                        className=" flex text-sm flex-col gap-3 items-center"
                      >
                        <CloudArrowUpIcon className="inline h-16 w-16 text-purple-500" />
                        <div className="flex gap-2 items-center">
                          <Typography
                            color="purple"
                            as="a"
                            className="hover:text-purple-800 cursor-pointer text-2xl text-purple-500 hover:underline  "
                          >
                            Choose an Image
                          </Typography>
                        </div>
                        OR <div className="text-lg">Drag and Drop an Image</div>
                      </Typography>
                    </FileUploader>
                  )}
                  {image && (
                    <img
                      src={image}
                      alt="image"
                      className={`max-h-full max-w-full rounded-xl m-auto`}
                    />
                  )}
                </div>
              </div>
            </div>
            <div
              className={`right p-8 lg:w-1/3 text-center flex flex-col justify-between rounded-r-3xl h-[500px]`}
            >
              <div>
                <Select
                  
                  name="modelName"
                  variant="standard"
                  color="purple"
                  id="model-name"
                  required
                  label="Select Model"
                >
                  {Object.keys(models).map((modle_name, index) => (
                    <Option value={modle_name} key={index}>
                      {models[modle_name]}
                    </Option>
                  ))}
                </Select>
              </div>
              <div className="flex flex-col justify-center gap-2">
                <Tooltip content="Reset the image form">
                  <Button
                    type="button"
                    color="red"
                    onClick={() => setImage(null)}
                    disabled={loading}
                  >
                    Clear Image
                  </Button>
                </Tooltip>
                <Tooltip content="Process Image">
                  <Button
                    color="purple"
                    type="submit"
                    disabled={loading}

                  >
                    Process Image
                  </Button>
                </Tooltip>
              </div>
            </div>
          </div>
          {loading && (
            <div className="flex flex-col items-center">
              <div className="w-4/5 h-3 my-4">
                <Progress
                  color="purple"
                  value={(loading * 5) / 3}
                  variant="gradient"
                  size="lg"
                />
                <div className="flex items-center justify-between gap-4 mb-2">
                  <Typography color="purple" variant="h6">
                    Processing
                  </Typography>
                  <Typography color="purple" variant="h6">
                    {loading} sec remaining
                  </Typography>
                </div>
              </div>
            </div>
          )}
        </form>
      )}
    </>
  );
}
