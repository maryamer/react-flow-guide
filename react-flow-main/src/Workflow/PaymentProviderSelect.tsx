import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReactFlow } from "reactflow";

const PAYMENT_PROVIDERS = [
  { code: "St", name: "Stripe" },
  { code: "Gp", name: "Google Pay" },
  { code: "Ap", name: "Apple Pay" },
  { code: "Pp", name: "Paypal" },
  { code: "Am", name: "Amazon Pay" },
];

export default function PaymentProviderSelect() {
  const { setNodes } = useReactFlow();
  const [isOpen, setIsOpen] = useState(false);

  const onProviderClick = ({ name, code }: { name: string; code: string }) => {
    const location = Math.random() * 500;

    setNodes((prevNodes) => [
      ...prevNodes,
      {
        id: `${prevNodes.length + 1}`,
        data: { name, code },
        type: "paymentProvider",
        position: { x: location, y: location },
      },
    ]);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Add Payment Provider <ChevronDown className="ml-2 w-4 h-4" />
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
          {PAYMENT_PROVIDERS.map((provider) => (
            <button
              key={provider.code}
              onClick={() => onProviderClick(provider)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {provider.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
