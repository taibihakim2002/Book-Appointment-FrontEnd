import { Button } from "@/components/ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero flex items-center overflow-hidden">
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
            <Image
              className="object-cover w-full h-full"
              alt=""
              src="/hero-image.avif"
              width={800}
              height={800}
            />
          </div>
          <div className="lg:py-24">
            <h2 className="text-center lg:text-start text-3xl font-bold sm:text-4xl">
              Find & Book <span className="text-primary"> Appointent </span>{" "}
              With Your Fav <span className="text-primary">Doctors </span>
            </h2>
            <p className="mt-4 text-gray-600 text-center lg:text-start font-light">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui
              hic atque tenetur quis eius quos ea neque sunt, accusantium soluta
              minus veniam tempora deserunt? Molestiae eius quidem quam
              repellat.
            </p>
            <Button className="mt-8 mx-auto block lg:mx-0">
              Get Started Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
