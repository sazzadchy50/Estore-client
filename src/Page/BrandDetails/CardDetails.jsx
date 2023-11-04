import { useLoaderData } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/Ai";

import Swal from "sweetalert2";
const CardDetails = () => {
  const item = useLoaderData();
  const { image, brandName, name, price } = item;
  console.log();
  const handleCart = (id) => {
    console.log(id);

    const cartItem = {
      image,
      brandName,
      name,
      price,
    };

    fetch(
      `https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app/addToCart/id`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(cartItem),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "middle",
            icon: "success",
            title: "Added to cart successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };
  return (
    <div className="lg:w-[100vh] mx-auto lg:mt-32 mt-10">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-[30vh]" src={item.image} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center">{item.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2  text-center my-5">
            <p className="text-xl">
              <span className="font-bold">Brand:</span> {item.brandName}
            </p>

            <p className="text-xl ">
              <span className="font-bold">Type:</span> {item.type}
            </p>

            <p className="text-xl ">
              <span className="font-bold">Price: </span>
              {item.price}
            </p>
            <p className="text-xl ">
              <span className="font-bold">Rating:</span> {item.rating}
            </p>
          </div>
          <p className="text-xl">
            <span className="font-semibold">
              <span className="font-bold">Description:</span>{" "}
            </span>
            {item.details}
          </p>
          <div className="mx-auto">
            <button
              onClick={() => handleCart(item._id)}
              className="btn btn-success btn-outline text-white  mt-5 "
            >
              <AiOutlineShoppingCart /> Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
