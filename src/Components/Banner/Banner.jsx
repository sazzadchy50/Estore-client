const Banner = () => {
  return (
    <div
      className="hero h-[60vh] bg-cover bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://i.ibb.co/SB0tfVB/front-view-cyber-monday-shopping-cart-with-bags-copy-space-23-2148657638.jpg)",
        }}
    >

      <div className="hero-overlay bg-opacity-60"></div>
      <div className="text-neutral-content md:-ml-72 ">
        <div className="flex justify-start ">
          <h1 className=" text-start text-4xl md:text-7xl lg:text-6xl font-bold text-white ">
            <span>Welcome to</span>
            <br />
            <span> Estore</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
