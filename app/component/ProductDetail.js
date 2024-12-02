import Image from "next/image";

const ProductDetail = ({ name, enName, price, tag, details, image }) => {
  return (
    <div className="flex flex-row w-11/12 border-b-slate-200 border-b pb-4">
  <div className="flex items-center w-6/12">
    <div>
      <Image src={image} alt={name} width={160} height={160} className="rounded-md border hover:scale-110 transition-all" />
    </div>
  </div>
  <div className="flex flex-col w-6/12 h-20 justify-between border-white "> 
    <div className="flex flex-col justify-end items-end">
      <p>{name}</p>
      <p className="text-sm">{enName}</p>
    </div>
    <div className="flex mt-auto"> 
      <p className="text-center w-full bg-accent rounded-md">{price}</p>
    </div>
  </div>
</div>
  );
};

export default ProductDetail;
