import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const Details = () => {
  return (
    <div>
      <div className="flex flex-col justify-center mt-10 lg:flex-row items-center gap-4 lg:gap-8 mb-6 ">
        <Image
          alt="Profile"
          className="h-30 w-30 rounded-full"
          height={120}
          src="/doctor.jpg"
          sizes="100vw"
          style={{
            aspectRatio: "120/120",
            objectFit: "cover",
          }}
          width={120}
        />
        <div>
          <h3 className="text-lg font-semibold">
            WELCOME TO RURAL HEALTH UNIT III
          </h3>
          <p className="text-sm text-gray-600 mt-1">Ma. Cindy G. Estoce RMT</p>
        </div>
      </div>
      <p className="text-sm">
        In the words of Malcolm Gladwell in his book "Outlier" – If you work
        hard enough, assert yourself and use your mind and imagination, you can
        shape the world as you desire it to be... Our goal is to make everyone
        smile and feel our love and care. Designing this interactive website to
        serve as one of the portals of our communication and interaction will be
        among the ways we want to do that. Through this, feel our sincere web
        presence as our physical presence transcends all bounds, and then we
        reach you. Heart to heart, eye to eye, ear to ear and feeling to
        feeling. May the Lord continue to bless and guide us all. At Rural
        Health unit III, we want to work hard, assert ourselves, and use our
        minds and imagination so that the world of health care that we are
        shaping with the help of the powers above, will be as our community
        desires.
      </p>
    </div>
  );
};

export default Details;
