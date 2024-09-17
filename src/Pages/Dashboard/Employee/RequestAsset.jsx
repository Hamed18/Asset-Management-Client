import React, { useState } from "react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import RequestModal from "./RequestModal";
import { AuthContext } from "../../../Providers/AuthProviders";

const RequestAsset = () => {
  const assets = useLoaderData();
  console.log(assets);

  const { user } = useContext(AuthContext); // Assuming user is fetched from context
  const [selectedAsset, setSelectedAsset] = useState(null); // Track the asset being requested
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [ID,setID] = useState();

  const handleRequest = (asset) => {
    setSelectedAsset(asset);
    setIsModalOpen(true); // Open modal
	setID(asset._id);
  };

  return (
    <div className="container mx-auto py-24">
      <h2 className="text-3xl font-bold mb-6 text-center">Assets List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {assets.map((asset, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{asset.name}</h3>
            <p className="mb-1">Type: {asset.type}</p>
            <p className="mb-3">
              Availability:{" "}
              <span
                className={`font-bold ${
                  asset.availability === "Available" ? "text-green-500" : "text-red-500"
                }`}
              >
                {asset.availability === "Available" ? "Available" : "Out of stock"}
              </span>
            </p>
            <button
              className="btn btn-primary"
              onClick={() => handleRequest(asset)}
              disabled={asset.availability === "Out of stock"}
            >
              Request
            </button>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <RequestModal
		asset={selectedAsset}
		user={user}
		id = {ID}
		onClose={() => setIsModalOpen(false)}
       >
		</RequestModal>
      )}
    </div>
  );
};

export default RequestAsset;
