const AddProduct = () => {

    const handleAdd = (e) => {
      e.preventDefault()
      const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;
    // const type = form.type.value;
    
    console.log(image, name, brandName, price, rating, shortDescription);
    }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add Products</h1>
          
        </div>
        <div className="card flex-shrink-0   shadow-2xl bg-base-100 w-[70vh]">
          <form onSubmit={handleAdd} className="card-body ">
            {/* image and name */}
            <div className="flex gap-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  name="image"
                  type="text"
                  placeholder="Image"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/* brand and price */}
            <div className="flex gap-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Brand Name</span>
                </label>
                <input
                  name="brandName"
                  type="text"
                  placeholder="Brand name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="number"
                  placeholder="Price"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            {/*Short description and  rating */}
            <div className="flex gap-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <input
                  name="shortDescription"
                  type="text"
                  placeholder="Short Description"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Rating</span>
                </label>
                <input
                  name="rating"
                  type="number"
                  placeholder="Rating"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>
            <div className="w-full">
              <div className="dropdown ">
                <label tabIndex={0} className="btn ">
                  Type
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a>Phone</a>
                  </li>
                  <li>
                    <a>Laptop</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-purple-500 text-white ">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};



export default AddProduct;
