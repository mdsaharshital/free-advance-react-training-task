import React from "react";
import useOrderData from "../../utils/useOderData";
import OrderTable from "../../components/OrderTable";

const AllOrders = () => {
  const { orderData, loading, error } = useOrderData();

  if (loading) return <p>Loading......</p>;
  return (
    <section>
      <h1 className="text-2xl text-center mt-8 font-bold">
        All Orders: {orderData.length}
      </h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="py-20">
          <OrderTable orders={orderData} />
        </div>
      )}
    </section>
  );
};

export default AllOrders;
