"use client";
import "./howDoesItWork.css";
import { useEffect, useState } from "react";
import { headings, content } from "./HowDoesItWorkData";
import HowDoesItWorkTable from "./howDoesItWorkTable/HowDoesItWorkTable";
import Image from "next/image";
const HowDoesItWork = () => {
  const [selectedId, setSelectedId] = useState(1);
  const currentContent = content.find((item) => item.id === selectedId);
  useEffect(() => {
    content.forEach((item) => {
      const img = document.createElement("img");
      img.src = item.icon.src;
      if (item.mobileIcon) {
        const mobileImg = document.createElement("img");
        mobileImg.src = item.mobileIcon.src;
      }
    });
  }, []);

  return (
    <div className="howDoesItWork-container">
      <h1 className="howDoesItWork-heading">How Does it Work</h1>
      <div className="howDoesItWork-content">
        <div className="howDoesItWork-content-right">
          <HowDoesItWorkTable
            headings={headings}
            selectedId={selectedId}
            setSelectedId={setSelectedId}
          />
        </div>
        <div className="howDoesItWork-content-left">
          <p className="howDoesItWork-content-para">{currentContent.para}</p>
          <Image
            src={currentContent?.icon.src}
            alt="peterborough taxi service luton heathrow taxi gatwick private taxi luton airport cab east midlands airport taxi birmingham airport transfers taxi peterborough luton airport taxi taxi from luton airport luton airport transfers"
            width={currentContent.icon.width}
            height={currentContent.icon.height}
          />
        </div>
      </div>
    </div>
  );
};
export default HowDoesItWork;
