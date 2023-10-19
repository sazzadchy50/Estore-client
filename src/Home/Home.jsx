import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner/Banner";
import Footer from "../Page/Footer/Footer";
import Brand from "../Components/Brand/Brand";

const Home = () => {
const brands = useLoaderData()

  return <>
    <Banner></Banner>
        <div className="grid md:grid-cols-3 gap-5 container mx-auto lg:mt-32 mt-10 px-5 ">
            {
            brands.map(brands => <Brand key={brands.id} brands={brands}></Brand>)
            }
        </div>
    <Footer></Footer>
    
  
  </>;
};

export default Home;
