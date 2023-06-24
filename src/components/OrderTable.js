import React, { useState } from "react";

const OrderTable = ({ orders }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const dataPerPage = 10;
  const totalPages = Math.ceil(orders.length / dataPerPage);
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // Get the current page's data
  const startIndex = (currentPage - 1) * dataPerPage;
  const endIndex = startIndex + dataPerPage;
  const currentData = orders.slice(startIndex, endIndex);

  return (
    <>
      <div className="overflow-x-auto text-center">
        <table className="min-w-full  border border-gray-300">
          <thead>
            <tr className="bg-accent/20">
              <th className="py-3 font-semibold text-sm text-gray-700 border-b">
                Order No
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                Order ID
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                Customer Name
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                Status
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                Delivery Type
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                Total Bill
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                Ordered At
              </th>
              <th className="py-3 px-4 font-semibold text-sm text-gray-700 border-b">
                Delivery Time
              </th>
            </tr>
          </thead>
          <tbody>
            {currentData?.map((order, i) => (
              <tr
                key={order.orderId}
                className={`text-sm border-b even:bg-accent/5 `}
              >
                <td className="py-3 px-4">{i + 1}</td>
                <td className="py-3 px-4">{order.orderId}</td>
                <td className="py-3 px-4">{order.customerName}</td>
                <td className="py-3 px-4">{order.status}</td>
                <td className="py-3 px-4">{order.deliveryType}</td>
                <td className="py-3 px-4">{order.totalBill}</td>
                <td className="py-3 px-4">
                  {new Date(order.orderedAt).toLocaleString()}
                </td>
                <td className="py-3 px-4">
                  {new Date(order.deliveryTime).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex items-center gap-8 justify-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            disabled={currentPage === page}
            className={`cursor-pointer text-lg ${
              currentPage === page ? "text-accent" : ""
            }`}
            onClick={() => handlePageClick(page)}
          >
            {page}
          </button>
        ))}
      </div>
    </>
  );
};

export default OrderTable;
