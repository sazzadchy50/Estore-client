import { useState } from "react";
import { Toaster } from "react-hot-toast";
import Swal from 'sweetalert2'


const AddProduct = () => {
  const [selectedType, setSelectedType] = useState("");

  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const form = e.target;
    const image = form.image.value;
    const name = form.name.value;
    const brandName = form.brandName.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const shortDescription = form.shortDescription.value;
    const details = form.details.value;
    const type = selectedType;
    const newBrands = {
      image,
      name,
      brandName,
      price,
      rating,
      shortDescription,
      type,
      details
    };
    console.log(image, name, brandName, price, rating, shortDescription, type);

    //send data to the server
    fetch("http://localhost:5000/brand", {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBrands),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
            Swal.fire({
                title: 'Success',
                text: 'Product added successfully',
                icon: 'success',
                confirmButtonText: 'ok'
              })
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
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
            {/*type and  rating */}
            <div className="flex gap-5 w-full">
              <div className="form-control w-1/2 max-w-xs">
                <label className="label">
                  <span className="label-text">Type</span>
                </label>
                <select
                  className="select select-bordered 
              "

                  //   value ={selectedType}
                  onChange={handleTypeChange}
                >
                  <option disabled selected>
                    category
                  </option>
                  <option>Phone</option>
                  <option>Laptop</option>
                  <option>Watch</option>
                </select>
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
        {/* short description */}
            <div className="form-control w-full max-w-xs">
              <div className="form-control">
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
              <div className="form-control">
                <label className="label">
                  <span className="label-text"> details</span>
                </label>
                <input
                  name="details"
                  type="text"
                  placeholder="details"
                  className="input input-bordered"
                  required
                />
                
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-purple-500 text-white ">
                Add Product
              </button>
            </div>
        
          </form>
        <Toaster/>  
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
