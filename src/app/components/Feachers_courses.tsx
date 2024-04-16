"use client";
import React from "react";
import { BackgroundGradient } from "./ui/background-gradient";
// import { data } from "./path/to/data";
import { data } from "../data/Data";

export default function BackgroundGradientDemo() {
  // Destructure the products array from the data object
  const { products } = data;

  return (
    <div>
      <div className="py-10 justify-center mx-auto">
        <h1 className="text-xl font-bold text-center  uppercase text-teal-500">
          Feachers courses
        </h1>
        <p className="mt-4 md:text-7xl text-3xl font-bold text-neutral-300 bg-clip-text text-center mx-auto">
          we are drawing the attention
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
        {/* Map over the products array and render a card for each product */}
        {products.flat().map((product) => (
          <div key={product.id} className="">
            <BackgroundGradient>
              <div className="rounded-[22px] p-4 sm:p-10 bg-white dark:bg-zinc-900">
                {/* <img src={product.thumbnail} alt="" /> */}
                <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                  {product.title}
                </p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {product.quantity}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {product.discountPercentage}
                </p>
                <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                  <span>Buy now </span>
                </button>
                <button className="py-2 px-7 text-black flex mt-4 text-xl bg-white font-normal ">
                  Add to cart
                </button>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
      <div className=" mx-auto flex justify-center mt-10">
        <button className="py-3 px-10 text-black flex mt-4 text-xl bg-white font-semibold rounded-full">
          show more
        </button>
      </div>
    </div>
  );
}
