const UserRating = () => {
  return (
    <div>
        <h2 className="text-5xl font-semibold text-center my-12">Clients Rating</h2>
      <div className="grid md:grid-cols-4 mx-auto container gap-5">
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full w-1/3"
              src="https://i.ibb.co/R787y1M/Max-R-Headshot-1.jpg"
              alt="Amanda"
            />
          </figure>
          <div className="card-body">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-center">Amanda</h2>
            </div>
            <p>Outstanding service and products. I bought a phone, and it exceeded my expectations</p>
           
          </div>
        </div>
        <div className="card   bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full w-1/3"
              src="https://i.ibb.co/r2B3zDP/l-UVJn-Wd4-Xo-N5-QUZWz-K-Qi-Cd-RNd-EOuzf-NXZg-g-Yu-DOc-Ufjy9dcafq-Sl0l-RU6p-Yu-Anov-Lx9-X4fy-ZI-s900.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-center">Daniel</h2>
            </div>
            <p>Impressive shop with top-quality items. I got a watch, and it is stunning. Highly satisfied</p>
           
          </div>
        </div>
        <div className="card   bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full w-1/3"
              src="https://i.ibb.co/nsrtL9j/Real-Men-To-Take-Beard-Inspo-From1200-5e820fa725486.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-center">Shophia</h2>
            </div>
            <p>Amazing experience shopping here. Purchased a laptop, and it ds working flawlessly. Great job!</p>
           
          </div>
        </div>
        <div className="card   bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-full w-1/3"
              src="https://i.ibb.co/NLVpH5p/handsome-unshaven-man-smiling-at-camera-and-expressing-positivity-photo.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-center">Tomas</h2>
            </div>
            <p>Exceptional service and excellent selection. I bought a tablet, and it s been a game-changer.</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRating;
