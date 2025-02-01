
import Image from 'next/image';

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}

interface ProductListProps {
  products: Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div key={product.id} className="max-w-xs rounded-lg border border-gray-200 shadow-md overflow-hidden">
          {/* Use next/image for image rendering */}
          <Image
            src={`/assets/${product.image}`}
            alt={product.name}
            width={200} 
            height={200}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-500 mt-2">{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
