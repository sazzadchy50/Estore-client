
import gif from "../../../src/assets/NotAvailable.gif"
const NotAvailable = () => {
    return (
        
            <div className="grid col-span-3 flex-col justify-center items-center mb-32">
                <div className="">
                    <img className="mx-auto" src={gif} alt="" />
                </div>
                <h2 className="text-5xl font-bold text-center italic">NOT AVAILABLE</h2>
            </div>
       
    );
};

export default NotAvailable;