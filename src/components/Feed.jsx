import React, { useContext, useEffect } from "react";

import { Context } from "../context/contextApi";
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feed = () => {
  const { loading, searchResults } = useContext(Context);

  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h");
  }, []);

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {!loading &&
            searchResults.map((item, index) => {
              if (item.type !== "video") return null; // 'false' के बजाय 'null' लौटाना
              return (
                <VideoCard
                  key={`${item.video.videoId}-${index}`} // अद्वितीय कुंजी सुनिश्चित करने के लिए कुंजी में index शामिल किया गया
                  video={item.video}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Feed;
