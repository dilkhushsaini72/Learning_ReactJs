import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const IndividualProduct = () => {
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const productApi = async () => {
    try {
      const apiResponse = await fetch(
        `https://fakestoreapi.com/products/${id}`
      );
      const result = await apiResponse.json();
      setProduct(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    productApi();
  }, [id]);

  if (isLoading) {
    return <h2 className="text-center text-xl mt-10">Loading...</h2>;
  }

  if (error) {
    return (
      <h2 className="text-center text-red-500 mt-10">
        Something went wrong: {error.message}
      </h2>
    );
  }

  const { image, title, price, description, category, rating } = product;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid md:grid-cols-2 gap-10 bg-white p-6 shadow-lg rounded-lg">
        {/* Product Image */}
        <div className="relative flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="w-full h-[350px] object-contain rounded-md border"
          />
          <span className="absolute top-4 left-4 bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full uppercase font-medium shadow">
            {category}
          </span>
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">{description}</p>

            <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl font-bold text-green-600">${price}</span>
              <div className="flex items-center text-sm text-yellow-500 font-semibold">
                ⭐ {rating.rate}
                <span className="text-gray-500 ml-2">({rating.count} reviews)</span>
              </div>
            </div>
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-lg font-semibold rounded-md hover:shadow-md transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
