
export default function UploadingAnimation({showload}) {
    
    return (
      <div className="relative w-full h-full flex flex-col items-center justify-center z-20 ">
        
  
        {showload && (
          <button
            className="relative w-full h-full rounded-full  border-[5px] animate-extend"
          >
            <span className="text-3xl text-[white] animate-disappear">
              Evaluating..
            </span>
            <img
              src="https://i.cloudup.com/2ZAX3hVsBE-3000x3000.png"
              alt="loading"
              className="absolute inset-0 m-auto opacity-0 animate-appear"
              width="62"
              height="62"
            />
          </button>
        )}
      </div>
    );
  }