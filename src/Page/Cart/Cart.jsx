import { useLoaderData } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItem = useLoaderData();
  // console.log(cartItem);

  //   useEffect(()=>{
  //     fetch(`https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app/cart`)
  //     .then(res => res.json())
  //     .then(data =>{
  //         setCarts(data)
  //     })
  //   },[])

  //   const handleDelete = id =>{
  //     Swal.fire({
  //         title: 'Are you sure?',
  //         text: "You want to delete your Product?",
  //         icon: 'warning',
  //         showCancelButton: true,
  //         confirmButtonColor: '#3085d6',
  //         cancelButtonColor: '#d33',
  //         confirmButtonText: 'Yes, delete it!'
  //       }).then((result) => {
  //         if (result.isConfirmed) {
  //           Swal.fire(
  //             'Deleted!',
  //             'Your file has been deleted.',
  //             'success'
  //           )
  //           fetch(`https://estore-server-ll89cnlgf-sazzads-projects-05d40223.vercel.app/cart/${id}`,{
  //             method:'DELETE'
  //           })
  //           .then(res => res.json())
  //           .then(data => {
  //             console.log(data);
  //             if(data.deletedCount > 0 ){
  //                 const remaining = carts.filter(cart => cart._id !== id)
  //                 setCarts(remaining)
  //             }
  //           })
  //         }
  //       })

  //   }
  return (
    <div className="overflow-x-auto container  mx-auto mt-12">
      <h2 className="text-center text-3xl font-bold">Your Cart</h2>

      <table className="table w-full mt-5">
        {/* head */}
        <thead>
          <tr>
            <div>
              <th></th>
              <th></th>
              <th></th>
              <th>Image </th>
              <th>Brand Name </th>
              <th>Watch Name</th>
              <th>Price</th>
            </div>
          </tr>
        </thead>

        <tbody className="">
          {cartItem?.map((cart) => (
            <CartItem key={cart._id} cart={cart}></CartItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
