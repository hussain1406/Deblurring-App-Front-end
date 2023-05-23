import { useState, Fragment } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { Helmet } from "react-helmet";

export default function About() {
  const FAQs = [
    {
      Question: "What is a deblurring app?",
      Answer:
        "A deblurring app is a software application that can be used to remove blurring from images.",
    },
    {
      Question: "How does a deblurring app work?",
      Answer:
        "A deblurring app works by using deep learning models such as convolutional neural networks (CNNs) or generative adversarial networks (GANs) to learn how to recover details from blurry images.",
    },
    {
      Question: "What is a transformer in image processing?",
      Answer:
        "A transformer is a type of deep learning model that can be used for a variety of tasks in image processing, including deblurring, de-raining, and denoising.",
    },
    {
      Question: "How can a transformer be used to deblur images?",
      Answer:
        "A transformer can be trained on a dataset of blurry and sharp images to learn how to recover details from blurry images, and can then be used to deblur new images.",
    },
    {
      Question: "What is Restormer and how does it work?",
      Answer:
        "Restormer is a type of generative adversarial network (GAN) that is trained on images with and without rain to learn how to remove raindrops from images, also known as de-raining.",
    },
    {
      Question: "How does Restormer de-rain images?",
      Answer:
        "Restormer is trained to learn how to remove raindrops from images by comparing images with raindrops to those without, and generating new images that have had the raindrops removed.",
    },
    {
      Question: "What is image denoising and why is it important?",
      Answer:
        "Image denoising is the process of reducing noise in images caused by factors such as low light, high ISO settings, or compression. It is important because noisy images can be distracting and make it difficult to see important details.",
    },
    {
      Question: "How can image denoising improve image quality?",
      Answer:
        "Image denoising can improve image quality by reducing noise and making images appear sharper and more clear.",
    },
    {
      Question: "What are the different types of image noise?",
      Answer:
        "The different types of image noise include Gaussian noise, Poisson noise, salt-and-pepper noise, and quantization noise.",
    },
    {
      Question: "How does a denoising filter work?",
      Answer:
        "A denoising filter works by smoothing out the image by averaging pixel values, which reduces the impact of noise on the image.",
    },
    {
      Question: "What is motion blur in photography?",
      Answer:
        "Motion blur is the effect of blurring an image in a specific direction to simulate the effect of a camera's motion. It is often used in artistic photography to convey a sense of motion or speed.",
    },
    {
      Question: "Can a deblurring app remove motion blur from an image?",
      Answer:
        "Yes, a deblurring app can remove motion blur from an image by analyzing the direction and amount of blur and then applying an appropriate algorithm to sharpen the image.",
    },
    {
      Question: "Can a deblurring app repair out-of-focus images?",
      Answer:
        "Yes, some deblurring apps can also repair out-of-focus images by using algorithms to reconstruct the image based on the depth of field and other factors.",
    },
    {
      Question: "What are some common factors that can cause image blurring?",
      Answer:
        "Some common factors that can cause image blurring include camera shake, motion blur, out-of-focus images, and noise.",
    },
    {
      Question: "How can I prevent image blurring when taking photos?",
      Answer:
        "To prevent image blurring when taking photos, you can use a tripod to stabilize the camera, increase the shutter speed to reduce motion blur, and use manual focus to ensure that the subject is in focus.",
    },
    {
      Question:
        "Can a deblurring app improve the quality of old or low-resolution images?",
      Answer:
        "A deblurring app may be able to improve the quality of old or low-resolution images to some extent, but it will depend on the specific app and the quality of the original image.",
    },
    {
      Question:
        "What is the difference between deblurring and sharpening an image?",
      Answer:
        "Deblurring an image is the process of removing blur caused by camera shake, motion blur, or other factors, while sharpening an image is the process of increasing the contrast between edges in an image to make it appear sharper.",
    },
    {
      Question:
        "What is the difference between image denoising and deblurring?",
      Answer:
        "Image denoising is the process of removing noise from an image, while deblurring is the process of removing blur caused by camera shake, motion blur, or other factors.",
    },
    {
      Question:
        "Can a deblurring app be used to enhance images for medical or scientific purposes?",
      Answer:
        "Yes, deblurring apps can be used to enhance images for medical or scientific purposes, such as improving the clarity of images taken with microscopes or telescopes.",
    },
    {
      Question:
        "What are some factors to consider when choosing a deblurring app?",
      Answer:
        "Some factors to consider when choosing a deblurring app include the app's features, ease of use, compatibility with your device or operating system, and cost.",
    },
    {
      Question: "Are there any risks associated with using a deblurring app?",
      Answer:
        "There are generally no risks associated with using a deblurring app, but it is important to ensure that the app is from a reputable developer and to follow any instructions or precautions provided by the app.",
    },
    {
      Question: "What are some limitations of deblurring apps?",
      Answer:
        "Some limitations of deblurring apps include the inability to completely restore details that were lost due to blurring, the potential for the app to introduce artifacts or noise into the image, and the need for high-quality input images to produce good results.",
    },
    {
      Question: "Can a deblurring app be used to remove blur from videos?",
      Answer:
        "Yes, some deblurring apps can be used to remove blur from videos as well as images.",
    },
    {
      Question: "Can a deblurring app be used to remove blur from screenshots?",
      Answer:
        "Yes, deblurring apps can be used to remove blur from screenshots as long as the image contains enough information to be processed by the app.",
    },
    {
      Question:
        "Is it possible to deblur an image without using a deblurring app?",
      Answer:
        "It may be possible to deblur an image without using a deblurring app by manually editing the image in a photo editing software, but this can be time-consuming and may not produce as good results as a dedicated deblurring app.",
    },
    {
      Question:
        "Can a deblurring app restore images that have been intentionally blurred to protect privacy?",
      Answer:
        "No, deblurring apps are designed to remove blur caused by camera shake, motion blur, or other factors, and cannot restore intentionally blurred images.",
    },
    {
      Question:
        "Can a deblurring app improve the quality of images taken in low light conditions?",
      Answer:
        "A deblurring app may be able to improve the quality of images taken in low light conditions to some extent, but it will depend on the specific app and the quality of the original image.",
    },
    {
      Question: "Are deblurring apps difficult to use?",
      Answer:
        "Deblurring apps vary in their ease of use, but most are designed to be user-friendly and require little to no technical knowledge to operate.",
    },
    {
      Question:
        "Can a deblurring app be used to improve the quality of images taken with a smartphone?",
      Answer:
        "Yes, deblurring apps can be used to improve the quality of images taken with a smartphone camera, but the quality of the results will depend on the specific app and the quality of the original image.",
    },
    {
      Question:
        "How long does it take to deblur an image using a deblurring app?",
      Answer:
        "The time it takes to deblur an image using a deblurring app will depend on the size and complexity of the image, the speed of the device being used, and the specific app being used.",
    },
    {
      Question:
        "Can a deblurring app remove blur caused by a dirty camera lens?",
      Answer:
        "No, deblurring apps are not designed to remove blur caused by a dirty camera lens. The best way to avoid this type of blur is to keep the camera lens clean.",
    },
    {
      Question:
        "Can a deblurring app be used to remove blur from scanned documents?",
      Answer:
        "Yes, deblurring apps can be used to remove blur from scanned documents, as long as the image contains enough information to be processed by the app.",
    },
    {
      Question: "Do deblurring apps work equally well on all types of images?",
      Answer:
        "Deblurring apps may work better on some types of images than others, depending on factors such as the amount and type of blur present in the image, the resolution of the image, and the quality of the original image.",
    },
  ];
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };
  return (
    <div className="w-8/12 block m-auto">
      <Helmet>
        <title>About FYP - Image Deblurring App</title>
      </Helmet>
      <Fragment>
        {FAQs.map((obj, index) => (
          <Accordion
            key={index}
            open={open === index + 1}
            animate={customAnimation}
          >
            <AccordionHeader onClick={() => handleOpen(index + 1)}>
              {obj.Question}
            </AccordionHeader>
            <AccordionBody>{obj.Answer}</AccordionBody>
          </Accordion>
        ))}
      </Fragment>
    </div>
  );
}
