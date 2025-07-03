import React, { useState, useEffect } from "react";

const POSHomepage = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [inputBuffer, setInputBuffer] = useState("");

  useEffect(() => {
    setSelectedProduct(products[0]);
  }, []);

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Can",
      image: "🍾",
      price: 0.05,
      qty: 0,
    },
    {
      id: 2,
      name: "Bottle",
      image: "🍾📦",
      price: 0.05,
      qty: 0,
    },
    {
      id: 3,
      name: "Plastic",
      image: "🛒",
      price: 0.6,
      qty: 0,
    },
    {
      id: 4,
      name: "24 Bottles/Case",
      image: "🍾⋆🍾",
      price: 1.2,
      qty: 0,
    },
    ,
    {
      id: 5,
      name: "18 Bottles/Case",
      image: "🍾⋆🍾",
      price: 1.2,
      qty: 0,
    },
    {
      id: 6,
      name: "12 Bottles/Case",
      image: "🍾⋆🍾",
      price: 1.2,
      qty: 0,
    },
    {
      id: 7,
      name: "24 Can/Case",
      image: "🍾⋆🍾",
      price: 1.2,
      qty: 0,
    },
    ,
    {
      id: 8,
      name: "18 Can/Case",
      image: "🍾⋆🍾",
      price: 1.2,
      qty: 0,
    },
    {
      id: 9,
      name: "12 Can/Case",
      image: "🍾⋆🍾",
      price: 1.2,
      qty: 0,
    },
  ]);

  const handleProductSelect = (product) => {
    setSelectedProduct(product);
    console.log(product);
    setInputBuffer("");
  };

  const handleNumpadClick = (value) => {
    if (value === "C") {
      setInputBuffer("");
      return;
    }
    if (value === "Submit") {
      setInputBuffer("");
      return;
    }

    if (value === "Enter") {
      if (selectedProduct && inputBuffer) {
        const newQty = parseInt(inputBuffer) || 0;
        setProducts((prev) =>
          prev.map((p) =>
            p.id === selectedProduct.id ? { ...p, qty: newQty } : p
          )
        );
        setInputBuffer("");
      }
      return;
    }

    setInputBuffer((prev) => prev + value);
  };

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (event) => {
      // Only handle keyboard input if a product is selected
      if (!selectedProduct) return;

      const key = event.key;

      // Handle numbers 0-9
      if (key >= "0" && key <= "9") {
        event.preventDefault();
        setInputBuffer((prev) => prev + key);
      }

      // Handle Enter key
      else if (key === "Enter") {
        event.preventDefault();
        if (inputBuffer) {
          const newQty = parseInt(inputBuffer) || 0;
          setProducts((prev) =>
            prev.map((p) =>
              p.id === selectedProduct.id ? { ...p, qty: newQty } : p
            )
          );
          setInputBuffer("");
        }
      }

      // Handle Backspace
      else if (key === "Backspace") {
        event.preventDefault();
        setInputBuffer((prev) => prev.slice(0, -1));
      }

      // Handle Escape or Delete to clear
      else if (key === "Escape" || key === "Delete") {
        event.preventDefault();
        setInputBuffer("");
      }
    };

    // Add event listener
    window.addEventListener("keydown", handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [selectedProduct, inputBuffer, setProducts]);

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.qty,
    0
  );

  return (
    // <div className="min-h-screen bg-black p-4">
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">WELCOME</h1>
          <div className="flex justify-between items-center">
            <div>
              <p className="text-gray-600">
                Select products and enter quantities
              </p>
              <p className="text-sm text-blue-600 mt-1">
                💡 Use keyboard or numpad to enter quantities
              </p>
            </div>
            <div className="text-right">
              <p className="text-3xl text-gray-500">Total Amount</p>
              <p className="text-3xl font-bold text-green-600">
                ${totalAmount.toFixed(2)}
              </p>
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-4 rounded-md transition-colors duration-150 text-lg"
                onClick={() => handleNumpadClick("Submit")}
              >
                Submit
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
          {/* Product Grid */}
          <div className="lg:col-span-3">
            {/* <h2 className="text-xl font-semibold text-gray-700 mb-4">Packs</h2> */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductSelect(product)}
                  className={`bg-white rounded-lg shadow-md p-4 cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedProduct?.id === product.id
                      ? "ring-2 ring-blue-500 bg-blue-50"
                      : "hover:bg-gray-50"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-2">{product.image}</div>
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-green-600 font-bold mb-2">
                      ${product.price.toFixed(2)}
                    </p>
                    <div className="bg-gray-100 rounded-md p-2">
                      <span className="text-sm text-gray-600">Qty: </span>
                      <span className="font-bold text-lg text-blue-600">
                        {product.qty}
                      </span>
                    </div>
                    {product.qty > 0 && (
                      <div className="mt-2 text-sm text-gray-600">
                        Total: ${(product.price * product.qty).toFixed(2)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Numpad and Selected Product */}
          <div className="lg:col-span-2">
            {/* Selected Product Display */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <h3 className="font-semibold text-gray-700 mb-3">
                Selected Product
              </h3>
              {selectedProduct ? (
                <div className="text-center">
                  <div className="text-3xl mb-2">{selectedProduct.image}</div>
                  <h4 className="font-semibold text-gray-800">
                    {selectedProduct.name}
                  </h4>
                  <p className="text-green-600 font-bold">
                    ${selectedProduct.price.toFixed(2)}
                  </p>
                </div>
              ) : (
                <p className="text-gray-500 text-center">No product selected</p>
              )}
            </div>

            {/* Input Display */}
            <div className="bg-white rounded-lg shadow-md p-4 mb-4">
              <div className="bg-gray-900 text-white text-right text-2xl font-mono p-4 rounded-md min-h-[60px] flex items-center justify-end">
                {inputBuffer || "0"}
              </div>
            </div>

            {/* Numpad */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <h3 className="font-semibold text-gray-700 mb-2">
                Enter Quantity
              </h3>
              <p className="text-xs text-gray-500 mb-3">
                Use keyboard: 0-9, Enter, Backspace, Esc/Del to clear
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[7, 8, 9, 4, 5, 6, 1, 2, 3].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleNumpadClick(num.toString())}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-4 rounded-md transition-colors duration-150 text-lg"
                  >
                    {num}
                  </button>
                ))}
                <button
                  onClick={() => handleNumpadClick("C")}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-4 px-4 rounded-md transition-colors duration-150"
                >
                  C
                </button>
                <button
                  onClick={() => handleNumpadClick("0")}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-4 px-4 rounded-md transition-colors duration-150 text-lg"
                >
                  0
                </button>
                <button
                  onClick={() => handleNumpadClick("Enter")}
                  className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-4 rounded-md transition-colors duration-150"
                >
                  Enter ✓
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default POSHomepage;
