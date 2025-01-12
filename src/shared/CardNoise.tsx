export const Noise = () => {
  return (
    <div
      className="absolute z-0 inset-0 w-full h-full scale-[1] transform opacity-10 [mask-image:radial-gradient(#fff,transparent,10%)]"
      style={{
        backgroundImage: "url(_static/sticky-scroll-section/noise.webp)",
        backgroundSize: "70%",
      }}
    ></div>
  );
};
