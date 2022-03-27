import React from "react";
import { Link } from "react-router-dom";

export default function ErrorPageMassage({ code, title, body }) {
  return (
    <section className="">
      <div className="container mx-auto min-h-screen flex justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full md:w-1/2 text-center">
            <h2 className="text-3xl font-semibold mb-6">
              {code} {title}
            </h2>
            <p className="text-lg mb-12">{body}</p>
            <Link
              to="/"
              className="text-gray-900 bg-red-200 focus:outline-none w-full py-3 rounded-full text-lg focus:text-black transition-all duration-200 px-8 cursor-pointer"
            >
              Back to Shop
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
ErrorPageMassage.defaultProps = {
  code: "404",
  title: "Page Not Found",
  body: "Sorry, but the page you were trying to view does not exist.",
};
