import React from "react";

const OrderTable = ({ orders }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-3 px-4 font-semibold text-sm text-gray-700 bg-gray-100 border-b">
              Order ID
            </th>
            <th className="py-3 px-4 font-semibold text-sm text-gray-700 bg-gray-100 border-b">
              Customer Name
            </th>
            <th className="py-3 px-4 font-semibold text-sm text-gray-700 bg-gray-100 border-b">
              Status
            </th>
            <th className="py-3 px-4 font-semibold text-sm text-gray-700 bg-gray-100 border-b">
              Delivery Type
            </th>
            <th className="py-3 px-4 font-semibold text-sm text-gray-700 bg-gray-100 border-b">
              Total Bill
            </th>
            <th className="py-3 px-4 font-semibold text-sm text-gray-700 bg-gray-100 border-b">
              Ordered At
            </th>
            <th className="py-3 px-4 font-semibold text-sm text-gray-700 bg-gray-100 border-b">
              Delivery Time
            </th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.orderId} className="text-sm border-b">
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
  );
};

export default OrderTable;
