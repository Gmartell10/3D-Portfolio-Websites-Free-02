import { useState } from "react";
import Globe from "react-globe.gl";

import { Button } from "../components/Button";
import { links } from "../constants";

export const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    void navigator.clipboard.writeText(links.contactEmail);

    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid h-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3 xl:grid-rows-6">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="Grid 1"
              className="h-fit w-full object-contain sm:h-[276px]"
            />

            <div>
              <p className="grid-headtext">Welcome to Gio Wartell Website</p>
              <p className="grid-subtext">
                Independet creative project focused on immersive 3D experiences, gaming, electronics, wildlife-nature conservation, tatto art, survival gear, fitness, some more.. Our mission is to build a community that combines technology, creativity, and environmental awareness. 
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="Grid 2"
              className="h-fit w-full object-contain sm:w-[276px]"
            />

            <div>
              <p className="grid-headtext">Technologies & Creative Tools</p>
              <p className="grid-subtext">
              Unreal Engine, React, Three.js, Blender. Photoshop, Electronics repair & upgrades, game development, ethical cybersecurity, and digital art creation.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex h-fit w-full items-center justify-center rounded-3xl sm:h-[326px]">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                showAtmosphere
                globeImageUrl="/assets/earth-night.jpg"
                bumpImageUrl="/assets/earth-topology.png"
                labelsData={[
                  {
                    lat: 19.4326,
                    lng: -99.1332,
                    text: "Wartell Studios HQ",
                    color: "lime",
                    size: 20,
                  },
                ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                Global Community & Wildlife Awareness.
              </p>

              <p className="grid-subtext">
                I&apos;m based in México, with remote work available.
              </p>

              <Button href="#contact" containerClass="w-full mt-10" isBeam>
                Text me!
              </Button>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="Grid 3"
              className="h-fit w-full object-contain sm:h-[266px]"
            />

            <div>
              <p className="grid-headtext">Gaming, Wildlife & Creative Culture</p>
              <p className="grid-subtext">
                Wartell Studios combines game development, electronics, tatto art, MMA, outdoor, survival, environmental awareness, and interactive digital experiences into a single community.
              
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="Grid 4"
              className="h-fit w-full object-cover sm:h-[276px] sm:object-top md:h-[126px]"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">
                Contact Wartell Studios!
              </p>

              <div className="copy-container">
                <Button onClick={handleCopy} containerClass="w-full">
                  <img
                    src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                    alt={hasCopied ? "Check" : "Copy"}
                    className="size-5"
                  />
                  {hasCopied ? "Copied to clipboard" : "Copy Email"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
