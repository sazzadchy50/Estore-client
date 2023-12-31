import { Link } from "react-router-dom";

const Brand = ({ brands }) => {

  const { id, image, brand } = brands;

//   const handleCard = () =>{

// console.log(brand);

//   }
  return (
    <div>
      <Link to={`/brandDetails/${brand}`} key={id}>
        
          <div className="card bg-base-100 shadow-xl h-full">
            <figure className="px-10 pt-10">
              <img
                src={image}
                alt={brand}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title flex-grow">{brand}</h2>
             
            </div>
        
        </div>
        
      </Link>
    </div>
  );
};

export default Brand;
