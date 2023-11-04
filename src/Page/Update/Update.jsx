import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
  const [selectedType, setSelectedType] = useState("");
  const data = useLoaderData();
  const {
    _id,
    brandName,
    name,
    image,
    price,
    rating,
    shortDescription,
    type,
    details,
  } = data;
  console.log(data);
  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
  };

  const handleUpdate = (e) => {
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
    const updatedBrands = {
      image,
      name,
      brandName,
      price,
      rating,
      shortDescription,
      type,
      details,
    };
    console.log(image, name, brandName, price, rating, shortDescription, type);

    //send data to the server
    fetch(
      `https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app/brand/${brandName}/${_id}`,
      {
        method: "PUT",

        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedBrands),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Product Update successfully",
            icon: "success",
            confirmButtonText: "ok",
          });
        }
      });
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl font-bold"> Update Products </h1>
        </div>
        <div className="card flex-shrink-0   shadow-2xl bg-base-100 w-[70vh]">
          <form onSubmit={handleUpdate} className="card-body ">
            {/* image and name */}
            <div className="flex gap-5">
              <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">Image</span>
                </label>
                <input
                  defaultValue={image}
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
                  defaultValue={name}
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
                  defaultValue={brandName}
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
            <div className="form-control w-full ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Short description</span>
                </label>
                <input
                  defaultValue={shortDescription}
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
                  defaultValue={details}
                  name="details"
                  type="text"
                  placeholder="details"
                  className="input input-bordered"
                  required
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-purple-500 text-white ">Update</button>
            </div>
          </form>
          <Toaster />
        </div>
      </div>
    </div>
  );
};

export default Update;
