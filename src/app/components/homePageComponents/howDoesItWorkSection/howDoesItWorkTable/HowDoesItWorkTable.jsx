import Image from "next/image";
import { content } from "../HowDoesItWorkData";
import "./howDoesItWorkTable.css";

const HowDoesItWorkTable = ({ headings, selectedId, setSelectedId }) => {
  return (
    <>
      {headings.map((heading) => {
        const currentContent = content.find((item) => item.id === heading.id);
        return (
          <div key={heading.id} className="howDoesItWork-content-wrapper">
            <div
              key={heading.id}
              className={`howDoesItWork-content-table ${
                heading.id === selectedId ? "active" : ""
              }`}
              onClick={() => setSelectedId(heading.id)}
              style={{ cursor: "pointer" }}
            >
              <div className="howDoesItWork-content-table-header">
                {heading.id === selectedId && (
                  <Image
                    src={heading.icon}
                    height={31}
                    width={31}
                    alt={heading.heading}
                  />
                )}
                <h4 className="content-table-heading">{heading.heading}</h4>
              </div>
              <Image
                src="/polygon.png"
                width={36}
                height={36}
                alt="polygon"
                className="content-table-header-polygon"
              />
              <Image
                src="/polygonbottom.png"
                width={36}
                height={36}
                alt="polygonbottom"
                className="content-table-header-polygon-bottom"
              />
            </div>
            {heading.id === selectedId && (
              <div className="howDoesItWork-mobilecontent">
                <p className="howDoesItWork-mobilecontent-para">
                  {currentContent.para}
                </p>
                <Image
                  src={currentContent.mobileIcon.src}
                  alt="icon"
                  width={currentContent.mobileIcon.width}
                  height={currentContent.mobileIcon.height}
                />
              </div>
            )}
          </div>
        );
      })}
    </>
  );
};

export default HowDoesItWorkTable;