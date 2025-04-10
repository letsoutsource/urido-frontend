import Link from "next/link";
import * as React from "react";

const LinkedinIcon = ({url="https://www.linkedin.com/company/trip-zip/",props}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <Link href={url} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      fill="none"
      {...props}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        transform: hovered ? "scale(1.1)" : "scale(1)",
        transition: "transform 0.2s ease",
      }}
    >
      <path
        fill="#fff"
        d="M29.994 6.623c0-.952-.162-1.885-.538-2.752C28.318 1.235 26.132.084 23.412.045 21.34.015 19.266 0 17.192 0H15.02c-2.8.004-5.602.019-8.403.022C2.669.026.01 2.698.005 6.66 0 9.458 0 12.257.005 15.055c0 1.331-.002 2.663-.005 3.995v2.459c0 .82.003 1.638.01 2.457.02 3.031 2.798 5.957 5.78 6.016.396.008.793.014 1.19.018h16.662c3.446-.035 6.337-2.89 6.348-6.326.006-1.725.01-3.45.01-5.175V14.18c-.003-2.519-.005-5.038-.006-7.558ZM8.626 25.563h-3.91c-.28 0-.28 0-.28-.284V11.525c0-.08.006-.16.01-.234.176-.056 4.282-.056 4.453 0v13.991c.003.25.064.283-.271.283l-.002-.003ZM6.663 9.285c-1.462-.008-2.566-1.14-2.57-2.565-.003-1.465 1.163-2.575 2.585-2.573A2.563 2.563 0 0 1 9.25 6.737a2.554 2.554 0 0 1-2.587 2.549Zm18.9 16.037v.195c-.157.057-4.198.066-4.426.015-.005-.086-.015-.177-.015-.27 0-1.787.005-3.573 0-5.36 0-.32 0-.642-.003-.963a21.7 21.7 0 0 0-.098-1.977c-.04-.414-.139-.82-.352-1.18a2.04 2.04 0 0 0-.159-.235 1.835 1.835 0 0 0-.912-.624c-.402-.127-.812-.133-1.215-.089-.544.057-1.049.243-1.444.653-.22.233-.391.508-.501.809a4.497 4.497 0 0 0-.277 1.416c-.014.352-.015.704-.015 1.056v6.51c0 .216 0 .267-.127.279-.038.004-.089.004-.155.004h-3.911c-.272 0-.272 0-.272-.27V11.29c.175-.047 4.06-.052 4.266-.01.004.061.01.128.01.195v1.51c0 .065.008.13.012.196l.045.014.02-.027c.076-.103.154-.204.227-.31a4.307 4.307 0 0 1 1.265-1.207 4.608 4.608 0 0 1 1.495-.637 5.11 5.11 0 0 1 1.255-.117c.39.013.78.034 1.166.086.392.05.777.145 1.147.283.266.098.522.22.765.365.106.065.208.135.305.212.54.423.963.977 1.23 1.608.248.59.418 1.208.505 1.841.118.841.174 1.69.17 2.538.003 2.499.003 4.997 0 7.494Z"
      />
    </svg>
    </Link>
  );
};

export default LinkedinIcon;
