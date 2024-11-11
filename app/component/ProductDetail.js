import Image from "next/image";

const ProductDetail = ({ name, enName, price, tag, details, image }) => {
  return (
    <div className="flex flex-col w-11/12 border-b-slate-200 border-b pb-4">
      <div className="flex items-center justify-between ">
        <div className="">
          <Image src={image} alt={name} width={160} height={150} className="rounded-md"/>
        </div>
        <div className="flex flex-col h-full">
          <div className="flex items-center h-full">
            <p className="text-sm text-right">{name}</p>
            <p className="text-sm text-left">{enName}</p>
          </div>
          <div>
            <p>{price} تومان</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
