import React from "react";
import ProductDetail from "./ProductDetail";
import { productData } from "@/libs/data";
function Items() {
  return (
    <div className="mt-8 w-full">
      <div className="flex items-center justify-center">
        <h2 className="text-white w-44 text-center">قهوه گرم و قهوه سرد</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-8 ">
        {productData.map((product) => (
          <ProductDetail
            key={product.id}
            name={product.name}
            enName={product.enName}
            price={product.price}
            tag={product.tag}
            details={product.details}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Items;
