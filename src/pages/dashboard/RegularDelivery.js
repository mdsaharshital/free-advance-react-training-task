import React from "react";
import useOrderData from "../../utils/useOderData";
import OrderTable from "../../components/OrderTable";

const RegularDelivery = () => {
  const { orderData, loading, error } = useOrderData();
  const filteredDelivery = orderData.filter(
    (o) => o.deliveryType === "Regular"
  );
  if (loading) return <p>Loading......</p>;
  return (
    <section>
      <h1 className="text-2xl text-center mt-8 font-bold">
        Regular Delivery : {filteredDelivery.length}
      </h1>
      {error ? (
        <p>{error}</p>
      ) : (
        <div className="py-20">
          <OrderTable orders={filteredDelivery} />
        </div>
      )}
    </section>
  );
};

export default RegularDelivery;
