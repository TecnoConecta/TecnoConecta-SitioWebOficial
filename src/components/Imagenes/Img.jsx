import React, { useState, useEffect } from "react";

const Logo = ({ mobileImgUrl, desktopImgUrl, alt }) => {
  const [mobileImg, setMobileImg] = useState("");
  const [desktopImg, setDesktopImg] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const mobileResponse = await fetch(mobileImgUrl);
        const desktopResponse = await fetch(desktopImgUrl);
        const mobileBlob = await mobileResponse.blob();
        const desktopBlob = await desktopResponse.blob();

        const mobileSrc = URL.createObjectURL(mobileBlob);
        const desktopSrc = URL.createObjectURL(desktopBlob);

        setMobileImg(mobileSrc);
        setDesktopImg(desktopSrc);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();

    return () => {
      // Cleanup resources if necessary
    };
  }, [mobileImgUrl, desktopImgUrl]);

  return (
    <picture>
      <source media="(max-width: 799px)" srcSet={mobileImg} />
      <source media="(min-width: 800px)" srcSet={desktopImg} />
      <img loading="eager" src={desktopImg} alt={alt} title={alt} />
    </picture>
  );
};

export default Logo;
