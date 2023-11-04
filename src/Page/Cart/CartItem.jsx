import { useState } from "react";
import Swal from "sweetalert2";

const CartItem = ({ cart }) => {
  console.log(cart);
  const [carts, setCarts] = useState(cart);
  const { _id, image, brandName, name, price } = carts;
  console.log(carts);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete your Product?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(
          `https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app/cart/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = carts.filter((cart) => cart._id !== id);
              setCarts(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <tr>
        <td>
          <button onClick={() => handleDelete(_id)} className="btn btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </td>
        <td>
          <div className="avatar">
            <div className=" rounded w-24 h-24">
              <img src={image} alt={name} />
            </div>
          </div>
        </td>
        <td>{brandName}</td>
        <td>{name}</td>
        <td>{price}</td>
      </tr>
    </div>
  );
};

export default CartItem;
