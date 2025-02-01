import Image from "next/image";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
 
  
}

export default function ProductCard({ image , name, price }: ProductCardProps) {
  return (
    <div className="max-w-xs rounded-lg border border-gray-200 shadow-md overflow-hidden">
      <Image src={image} alt={name} className="w-full h-48 object-cover"></Image>
      <div className="p-4">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-500 mt-2">{price}</p>
      </div>
    </div>
  );
}
