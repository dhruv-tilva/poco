import { useState, useEffect } from "react";
import getImages from "../api/get-images";
const Dishes = () => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    getImages().then((data) => setImages(data));
  }, []);
  return (
    <>
      <div className="px-4 py-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-7">
        {images.map((image) => {
          return (
            <div className="flex flex-col items-center" key={image.id}>
              <div className="w-32 h-28">
                <img
                  className="w-full h-full"
                  src={"http://localhost:8055/assets/" + image.img}
                  alt=""
                />
              </div>
              <p className="text-xl font-darker font-semibold transition-all duration-200 text-black cursor-pointer hover:text-[#ffc222]">
                {image.name}
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Dishes;
