import React, { useEffect, useState } from "react";
import CommonCard from "../common/CommonCard";

function ExpandablePdfCard({ data }) {
  const [open, setOpen] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const [zoomLevel, setZoomLevel] = useState(1);

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  const handleKeydown = (event) => {
    if (event.key === "Escape") {
      setIsFullscreen(false);
    }
  };

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.1, 2)); // Max zoom level 2
  };

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.1, -2)); // Min zoom level 1
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);
  function Detatiledpf() {
    return (
      <div
        className="sm:w-[282px] mb-4 flex sm:hidden"
        onClick={() => setOpen(!open)}
      >
        <CommonCard>
          <span className="text-[#6947BF] text-base  font-extrabold">
            Expand & view your file →
          </span>
        </CommonCard>
      </div>
    );
  }
  return (
    <>
      <Detatiledpf />
      <div
        className={`${!open ? "hidden sm:flex flex-col" : "visible"} ${
          isFullscreen ? "fixed inset-0 z-50 h-full" : ""
        }`}
      >
        <CommonCard
          classes={`"hidden"${
            !open
              ? "hidden sm:flex bg-[#FFFFFF] rounded-3xl "
              : "flex bg-[#FFFFFF7A] rounded-t-3xl "
          } `}
        >
          <div
            className={`p-2 w-full  ${
              open ? "grid lg:grid-cols-2" : "flex justify-between"
            } gap-4 `}
          >
            <div>
              <span
                className={`rounded-sm  font-bold text-sm text-[#5B6170] py-1 px-3 text-center ${
                  open ? "bg-[#FFFFFF]" : "bg-[#98A1BB1F]"
                }`}
              >
                {data?.fileName}
              </span>
            </div>

            <div className="">
              {!open ? (
                <>
                  <span
                    className="hidden sm:flex text-[#6947BF] text-base font-extrabold cursor-pointer transition-all duration-500 ease-in-out"
                    onClick={() => setOpen(!open)}
                  >
                    Expand & view your file →{" "}
                  </span>
                </>
              ) : (
                <>
                  <div className="flex w-full items-center gap-3 justify-between ">
                    <div className="flex items-center gap-2 text-[#5B6170] font-bold text-sm">
                      <img
                        src="/home/zoomout.svg"
                        alt="zoomout"
                        className="cursor-pointer"
                        onClick={zoomOut}
                      />
                      <span>{Math.ceil(zoomLevel * 100)}%</span>
                      <img
                        src="/home/zoomin.svg"
                        alt="zoomin"
                        className="cursor-pointer"
                        onClick={zoomIn}
                      />
                    </div>
                    <div className="flex flex-row gap-2">
                      <div className="bg-[#FCFBFD] rounded-2xl p-1 cursor-pointer">
                        <img
                          src="/home/fullscreen.svg"
                          alt=""
                          className="text-[#5B6170]"
                          onClick={toggleFullscreen}
                        />
                      </div>

                      <button
                        className="bg-[#FCFBFD] rounded-2xl px-4 py-1 flex items-center gap-2 text-[#5B6170] font-bold text-xs cursor-pointer"
                        onClick={() => setOpen(!open)}
                      >
                        <img src="/home/expand.svg" alt="expand" />
                        <span>Expand</span>
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </CommonCard>

        <CommonCard
          classes={`mt-0 rounded-b-3xl   ${open && "bg-[#FFFFFF] "} ${
            isFullscreen ? "fixed inset-0 z-50 h-full" : ""
          }`}
        >
          <div
            className={`transition-all duration-700 ease-in-out overflow-y-scroll overflow-x-hidden  ${
              open ? "opacity-100 max-h-[500px]" : "opacity-0 max-h-0"
            } ${isFullscreen ? "fixed inset-0 z-50 " : ""}`}
          >
            <div
              className="p-2 px-6  "
              style={{ transform: `scale(${zoomLevel})` }}
            >
              <div className="shadow-custom rounded-[6px] px-4 py-9">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                incidunt ut accusantium cumque tenetur asperiores aperiam eius
                consectetur voluptate cum, et consequuntur nulla nemo voluptas
                corrupti laborum tempora obcaecati natus?Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Officiis dolor possimus
                accusantium. Magni ab blanditiis, eum labore sed nulla sint ut
                voluptatum iure maiores sapiente ipsa in dolores quasi natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                culpa officiis modi omnis, tempore asperiores fuga maiores quas
                quam repellat nihil explicabo. Quo deserunt dicta officia
                quaerat neque perferendis atque.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                incidunt ut accusantium cumque tenetur asperiores aperiam eius
                consectetur voluptate cum, et consequuntur nulla nemo voluptas
                corrupti laborum tempora obcaecati natus?Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Officiis dolor possimus
                accusantium. Magni ab blanditiis, eum labore sed nulla sint ut
                voluptatum iure maiores sapiente ipsa in dolores quasi natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                culpa officiis modi omnis, tempore asperiores fuga maiores quas
                quam repellat nihil explicabo. Quo deserunt dicta officia
                quaerat neque perferendis atque.
                <br />
                <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
                incidunt ut accusantium cumque tenetur asperiores aperiam eius
                consectetur voluptate cum, et consequuntur nulla nemo voluptas
                corrupti laborum tempora obcaecati natus?Lorem ipsum dolor sit
                amet, consectetur adipisicing elit. Officiis dolor possimus
                accusantium. Magni ab blanditiis, eum labore sed nulla sint ut
                voluptatum iure maiores sapiente ipsa in dolores quasi natus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                culpa officiis modi omnis, tempore asperiores fuga maiores quas
                quam repellat nihil explicabo. Quo deserunt dicta officia
                quaerat neque perferendis atque. Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Ullam incidunt ut accusantium
                cumque tenetur asperiores aperiam eius consectetur voluptate
                cum, et consequuntur nulla nemo voluptas corrupti laborum
                tempora obcaecati natus?Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Officiis dolor possimus accusantium. Magni ab
                blanditiis, eum labore sed nulla sint ut voluptatum iure maiores
                sapiente ipsa in dolores quasi natus. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Debitis culpa officiis modi omnis,
                tempore asperiores fuga maiores quas quam repellat nihil
                explicabo. Quo deserunt dicta officia quaerat neque perferendis
                atque.
              </div>
            </div>
          </div>
        </CommonCard>
      </div>
    </>
  );
}

export default ExpandablePdfCard;
