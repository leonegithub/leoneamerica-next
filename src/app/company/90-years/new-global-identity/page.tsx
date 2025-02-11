"use client";

import Image from "next/image";
import globalIdentity from "../global-identity.png";
import ninetyYears from "../90-years.png";
import historyImage from "./history-image.png";

export default function NewGlobalIdentity() {
  return (
    <>
      <div style={{ padding: "56.25% 0 0 0", position: "relative" }}>
        <iframe
          src="https://player.vimeo.com/video/912230285?badge=0&autopause=0&player_id=0&app_id=58479"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          title="Leone new global identity"
        />
      </div>
      <div className="container pt-5 mx:auto">
        <h1 className="py-2 font-bold blue">
          Looking to the future with a new image
        </h1>
        <p>
          We are well aware of the importance of tradition, but we are also
          aware that evolution is an inevitable constant. This has led us to a
          deep reflection on our corporate image and has led us toward a renewal
          that wisely combines the past and the future. The change of the logo,
          one of the most visible and recognizable parts of the corporate
          identity, represented a process complex. We decided to keep the design
          intact, the hallmark of our logo and a symbol that has become
          recognizable over the decades, but at the same time we made changes
          that were subtle, but significant ones.
        </p>
        <div className="image-container gap-4 grid grid-cols-1 py-4 md:grid-cols-2">
          <Image
            style={{ width: "100%" }}
            src={globalIdentity}
            alt={"global-identity"}
          ></Image>
          <Image
            style={{ width: "100%" }}
            src={ninetyYears}
            alt={"ninety-years"}
          ></Image>
        </div>
        <p>
          The retro character of the 1960s has been refined and modernized,
          while the lines and colors have been made more vibrant and
          contemporary. This renewal does not represent a departure from our
          tradition, but rather a demonstration of our forward momentum. The
          removal of the oval and the slanting of the letters were tangible
          symbols of this new direction, testifying to the company&apos;s
          determination to go beyond predefined boundaries, established
          traditions and limitations. The goal is to remain at the forefront,
          embracing change and giving a global identity to both Leone and its
          subsidiaries. From a graphic point of view, the logo was optimized to
          ensure effective display on mobile, to the large area of a booth. This
          change was a very significant transition, with a major impact on the
          perception of the company. It gave rise to a new logo that, while
          retaining the design of the name Leone, an iconic element of the
          brand, was designed and created to be dynamic, modern, flexible and,
          above all, to enhance what the company represents today: a solid
          reality that looks to the future.
        </p>
        <h1 className="mt-4 py-2 font-bold blue">A tangible commitment</h1>
        <p>
          For nearly a century, we have built our company through hard work,
          innovation and commitment to customers. We have been able to withstand
          economic challenges, technological changes and industry dynamics,
          emerging ever stronger and ready to meet new challenges, setting high
          quality standards and providing products and services that have
          improved the lives of many people around the world. Our tradition is a
          source of pride, but we also recognize the need to evolve to keep up
          with the times. The world is changing rapidly, and we are witnessing
          growing environmental awareness and the need to address global
          challenges such as climate change. As a company, we feel it is
          incumbent upon us to embrace change and take responsibility for our
          impact on the environment and society. We are excited to share this
          journey with you, our partners, and our customers as together we build
          a better future for all!
        </p>
        <div className="image-container mt-4">
          <Image
            style={{ width: "100%" }}
            src={historyImage}
            alt="history-image"
          ></Image>
        </div>
      </div>
    </>
  );
}
