
const AboutUs = () => {
    return (
        <div>
            <div className="flex flex-col-reverse lg:flex-row container w-full my-32 justify-center  mx-auto gap-6 p-5">
                <div className="lg:w-1/2">
                    <img className="w-full" src="https://i.ibb.co/Gn6jcJr/people-concept-illustration-of-our-team-management-about-us-for-graphic-and-web-design-business-pres.jpg" alt="" />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="text-5xl italic font-bold mb-12 border-b-4 border-purple-500 pb-5 text-center">About Us</h2>
               <p>
               <span className="text-4xl">W</span>elcome to [Your Brand Name], your ultimate destination for high-quality mobile phones, laptops, and watches. We take pride in offering you a diverse range of products that cater to your every need and desire. Our journey began with a passion for technology and a commitment to providing the best in class products to our valued customers.

               </p>
               <p className="mt-5">
               Estore was founded by a group of tech enthusiasts who recognized the importance of staying connected in today's fast-paced world. With the rapid evolution of technology, we saw an opportunity to offer a curated selection of products that combine innovation, performance, and style.
               </p>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;