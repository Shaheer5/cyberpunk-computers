import React from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ product }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        {product.breadcrumbs.map((breadcrumb) => (
          <li key={breadcrumb.id}>
            <div className="flex items-center">
              <Link to={breadcrumb.to} className="mr-2 text-sm font-medium text-gray-900">
                {breadcrumb.name}
              </Link>
              <HiOutlineChevronRight />
            </div>
          </li>
        ))}
        <li className="text-sm">
          <Link to={product.to} aria-current="page" className="font-medium text-gray-500 hover:text-gray-600">
            {product.name}
          </Link>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
