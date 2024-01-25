import React from "react";

function Background() {
  return (
    //We dont return two elements in a single file for that we need to do this
      <>    
      <div className="fixed z-[2] w-full h-screen">
      <div className="py-10 w-full absolute top-[5%] flex justify-center text-xl font-semibold text-zinc-600">
        Documents
      </div>
      <h1 className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-[13vh] leading-none tracking-tighter font-semibold text-zinc-900.">
        Docs.
      </h1>
      </div>
    </>
  );
}

export default Background;
