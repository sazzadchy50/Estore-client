import { Link } from "react-router-dom";

const BrandDetailsCard = ({ item }) => {
  const { _id } = item;
  return (
    <div className="">
      <div className="card bg-base-100 shadow-xl">
        <figure>
          <img className="h-[30vh]" src={item.image} alt="" />
        </figure>
        <div className="card-body">
          <div className="text-center">
            <h2 className="text-2xl font-semibold items-">{item.name}</h2>
          </div>
          <div>
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

          <div className="flex gap-5 justify-center">
            <Link to={`/cardDetails/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>

            <Link to={`/update/${_id}`}>
              <button className="btn btn-success">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetailsCard;
