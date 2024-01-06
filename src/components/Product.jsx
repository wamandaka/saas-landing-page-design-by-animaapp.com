import ProductImage from "../assets/Product.svg";

const Product = () => {
  return (
    <>
      <div className="w-full px-5 mx-auto my-16 lg:px-52">
        <div className="flex items-center justify-center w-full bg-primary rounded-xl md:h-96 lg:h-[500px]">
          <img src={ProductImage} alt="" className="md:w-full lg:h-full" />
        </div>
      </div>
    </>
  );
};

export default Product;
