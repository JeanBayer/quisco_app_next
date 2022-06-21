const formatearDinero = (cantidad) => {
  return cantidad.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

export default formatearDinero;
