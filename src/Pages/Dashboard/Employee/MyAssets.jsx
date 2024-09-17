import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const MyAssets = () => {
  const loaderAssets = useLoaderData();
  const [assets, setAssets] = useState([]);

  // Filter the assets that are requested
  useEffect(() => {
    if (loaderAssets) {
      const remaining = loaderAssets.filter(asset => asset.Status === 'requested');
      setAssets(remaining);
    }
  }, [loaderAssets]); // Runs whenever loaderAssets changes

  return (
    <div className="container mx-auto py-24">
      <h2 className="text-3xl font-bold mb-6 text-center">Requested Assets List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.length > 0 ? (
          assets.map((asset, index) => (
            <div key={index} className="border rounded-lg p-4 shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{asset.name}</h3>
              <p className="mb-1">Type: {asset.type}</p>
              <p className="mb-3">
                Availability:{" "}
                <span
                  className={`font-bold ${
                    asset.availability === "Available"
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {asset.availability === "Available" ? "Available" : "Out of stock"}
                </span>
              </p>
              {/* Uncomment if request functionality is required */}
              {/* <button
                className="btn btn-primary"
                onClick={() => handleRequest(asset)}
                disabled={asset.availability === "Out of stock"}
              >
                Request
              </button> */}
            </div>
          ))
        ) : (
          <p className="text-center col-span-3">No requested assets found.</p>
        )}
      </div>
    </div>
  );
};

export default MyAssets;
