import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const productApi = async () => {
    try {
      const apiResponse = await fetch("https://fakestoreapi.com/products");
      const result = await apiResponse.json();
      setProducts(result);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    productApi();
  }, []);

  if (isLoading) {
    return <p className="text-center text-xl mt-10">Loading...</p>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 mt-10">
        Something went wrong: {error.message}
      </p>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-center text-3xl font-bold mb-8">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="border rounded-lg shadow-md p-4 flex flex-col items-center hover:shadow-xl transition cursor-pointer bg-white"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-center mb-2 line-clamp-2">
              {item.title}
            </h3>
            <p className="text-green-600 font-bold">${item.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
