import React from "react";
import Image from "next/image";
import "./bottomCardIcons.css";

const BottomCardIcons = () => {
  const bottomCardIconsList = [
    { icon: "/nationwideicon1.png", height: "25", width: "25" },
    { icon: "/nationwideicon2.png", height: "25", width: "25" },
    { icon: "/nationwideicon3.png", height: "25", width: "25" },
  ];

  return (
    <div className="specialaboutus-bottomcard-icons">
      {bottomCardIconsList.map((icon, index) => (
        <div key={index} className="specialaboutus-bottomcard-icon-div">
          <Image
            src={icon.icon}
            height={icon.height}
            width={icon.width}
            alt={`Icon ${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
};

export default BottomCardIcons;
