import { m } from "framer-motion";
import Image from "next/image";
import { aboutVariant } from "../../../variants/aboutVariant";

const AboutItems = () => {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center justify-center lg:flex-row lg:space-x-10 ">
        {/* text */}
        <div className="text lg:flex-[45%]">
          <m.h1
            className="flex items-start mb-6 space-x-2 text-xl font-normal text-white lg:text-2xl font-pop lg:space-x-3"
            initial={{ opacity: 0, y: 20 }}
            variants={aboutVariant}
            whileInView={aboutVariant.heading}
            viewport={{ once: true }}
          >
            <p>Hi{"👋, "} I&apos;m</p>
            <p className="relative font-semibold font-pop text-cyan w-fit">
              Idowu Daniel,
            </p>
          </m.h1>
          {/* info */}
          <div className="mb-10 md:mb-12 lg:mb-0">
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p1}
              viewport={{ once: true }}
            >
              As a software engineer, I thrive on
              transforming complex ideas into well-crafted applications that
              solve real-world problems. I specialize in designing and building
              resilient mobile and web applications, fine-tuning RESTful APIs
              for performance, and leveraging Test-Driven Development to create
              reliable and maintainable systems. Each project I’ve worked on has
              sharpened my ability to navigate intricate challenges while
              staying focused on delivering exceptional value.
            </m.p>
            <m.p
              className="mb-6 text-lg font-normal text-text lg:text-xl"
              variants={aboutVariant}
              initial={{ opacity: 0, y: 25 }}
              whileInView={aboutVariant.p2}
              viewport={{ once: true }}
            >
              I bring a hands-on, detail-oriented approach to every project,
              ensuring that functionality aligns with user needs and technical
              excellence. By actively collaborating with cross-disciplinary
              teams, I make thoughtful decisions that prioritize usability,
              efficiency, and long-term scalability. I’m passionate about
              creating solutions that not only meet but exceed expectations, all
              while fostering a collaborative environment that drives innovation
              and shared success.
            </m.p>
          </div>
        </div>
        {/* images/illustrsions */}
        <m.div
          className="lg:flex-[40%] w-full md:max-w-md relative cursor-pointer group"
          initial={{ opacity: 0, y: 20 }}
          variants={aboutVariant}
          whileInView={aboutVariant.image}
          viewport={{ once: true }}
        >
          <div className="w-full md:w-full h-[28rem] md:h-[37rem] lg:h-[30rem] xl:h-[34rem] relative rounded-md overflow-hidden border-2 border-cyan backdrop-blur-sm bg-cyan/20 z-20 ">
            <div className="relative w-full h-full duration-500 grayscale group-hover:grayscale-0">
              <Image
                className="object-cover"
                src={"/images/daniel.jpeg"}
                alt="moi"
                priority={true}
                fill
                quality={100}
                placeholder={"blur"}
                blurDataURL={"/images/daniel.jpeg"}
              />
            </div>
          </div>
          <div className="absolute h-[28rem] md:w-[105%] md:h-[37.5rem] lg:h-[30rem] xl:h-[34.5rem] w-full top-5 left-3 border-2 border-body z-10 bg-buttonBg rounded-lg group-hover:top-4 group-hover:left-3 duration-500"></div>
        </m.div>
      </div>
    </>
  );
};

export default AboutItems;
