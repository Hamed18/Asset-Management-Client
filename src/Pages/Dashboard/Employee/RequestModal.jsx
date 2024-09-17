import React, { useState } from "react";
import Swal from "sweetalert2";

const RequestModal = ({ asset, user, onClose }) => {
  const [notes, setNotes] = useState("");
  const [isRequestSent, setIsRequestSent] = useState(false);

  const handleRequestSubmit = () => {
    const requestDate = new Date().toISOString();
    const requestData = {
      assetName: asset.name,
      assetType: asset.type,
      requestDate,
      userId: user.uid, // Assuming the user has an id or uid
      userEmail: user.email,
      additionalNotes: notes,
    };

    console.log("Request Data:", requestData);

    // Simulate API call to submit request
    setTimeout(() => {
      setIsRequestSent(true);
	    Swal.fire({
          title: 'Your request is Successful.',
          showClass: {
              popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
          }
      });
      onClose(); // Close the modal after submission
    }, 1000);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-2xl font-semibold mb-4">Request Asset: {asset.name}</h2>
        <textarea
          className="w-full p-2 border rounded mb-4"
          placeholder="Enter additional notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="btn btn-primary mr-2"
            onClick={handleRequestSubmit}
            disabled={isRequestSent}
          >
            Request
          </button>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestModal;
