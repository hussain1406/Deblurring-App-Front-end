import {
  CloudIcon,
  SparklesIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Advanced Denoising",
    description:
      "Remove unwanted noise from your photos with advanced algorithms.",
    icon: SparklesIcon,
  },
  {
    name: "Rain Removal",
    description:
      "Eliminate rain streaks and droplets from your photos with advanced de-raining algorithms.",
    icon: CloudIcon,
  },
  {
    name: "Deblur and Sharpen",
    description:
      "Restore clarity and sharpness to your blurry photos with advanced deblurring and sharpening algorithms.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Customized Focus Adjustment",
    description:
      "Fine-tune your photo's focus with customized adjustments, giving you greater control over the sharpness and depth of field.",
    icon: AdjustmentsHorizontalIcon,
  },
];

export default function App() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Deblur and Derain Images
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Powerful Image Restoration Tools
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Restore your photos to perfection with our advanced image
            restoration tools. Try our app today and bring out the best in your
            photographs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-deep-purple-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
