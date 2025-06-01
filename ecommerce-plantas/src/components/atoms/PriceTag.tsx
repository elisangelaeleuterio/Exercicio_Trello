// src/components/atoms/PriceTag.tsx


const PriceTag = ({ value }: { value: number }) => {
  return <span>{value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</span>;
};

export default PriceTag;
