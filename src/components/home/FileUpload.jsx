import React from "react";

function Upload({
  fileData,
  uploadeDoc,
  handleDragOver,
  handleDragLeave,
  handleDrop,
  isDragging,
  resetUpload,
  error,
}) {
  return (
    <>
      <div
        className={`w-full h-[200px] rounded-sm border-dashed border-2 border-[#CEC4EB] p-10 bg-[#FCFBFD] flex items-center justify-center flex-col ${
          isDragging && "bg-blue-100 animate-pulse"
        }`}
        onDragOver={(e) => handleDragOver(e)}
        onDragLeave={(e) => handleDragLeave(e)}
        onDrop={(e) => handleDrop(e)}
      >
        {!fileData != "" ? (
          <>
            <img src="/home/uplode.svg" alt="uplode" className="mb-3" />
            <span className="text-sm text-[#7A8196] font-semibold">
              Drag and drop PDF
            </span>
            <span className="text-xs  text-[#7A8196] ">
              *Limit 25MB per file
            </span>
            <input
              type="file"
              accept="application/pdf"
              id="upload"
              className="hidden"
              onChange={(e) => uploadeDoc(e)}
            />
            <label
              htmlFor="upload"
              className={`rounded-lg p-2 px-6 mt-5 bg-[#FCFBFD] hover:bg-[#f8f8f8] border-2 border-gray-100 shadow-sm shadow-gray-100 text-[#6947BF] font-bold text-[15px] cursor-pointer  ${
                error != "" && " text-[red] animate-pulse border-red-300"
              }`}
            >
              {error == "" ? "upload your file" : "size limit exceed"}
            </label>
          </>
        ) : (
          <>
            <div className="relative flex flex-row items-center gap-2 rounded-lg p-2 bg-[#FCFBFD] border-2 border-gray-100 shadow-sm shadow-gray-100 ">
              <div className="rounded bg-[#FCFBFD] border-2 border-gray-100 ">
                <img src="/home/paper.svg" alt="upload" className="w-12 h-12" />
              </div>
              <div className="flex gap-2 items-center p-2">
                <img src="/home/tick.svg" alt="tick" />
                <span className="text-[11px] font-semibold text-[#7A8196]">
                  {fileData}
                </span>
              </div>
              <div
                className="w-4 h-4 flex items-center justify-center rounded-full absolute -right-1 -top-1 border-2 border-[#D9D9D9] hover:bg-[#D9D9D9] "
                onClick={() => resetUpload()}
              >
                <img src="/home/cross.svg" alt="cross" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Upload;
