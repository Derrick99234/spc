// components/RestrictionPopup.tsx
import React, { Dispatch, SetStateAction, useState } from "react";

interface RestrictionPopupProps {
  onClose: () => void;
  setShowRestriction: Dispatch<SetStateAction<boolean>>;
}

const RestrictionPopup: React.FC<RestrictionPopupProps> = ({
  onClose,
  setShowRestriction,
}) => {
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    const pwd = "2025myyearofharvest";
    if (e.key === "Enter") {
      if (password === pwd) {
        setShowRestriction(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 text-center animate-fade-in">
        <h2 className="text-3xl font-bold text-gray-600 mb-3">
          ⚠️ Restricted Access
        </h2>
        <p className="text-gray-700 mb-6">
          This feature is protected. Only authorized users are allowed to
          proceed.
          <br />
          If you believe you should have access, Please contact the web team.
        </p>
        <input
          type="password"
          className="w-full bg-gray-200 h-16 px-4 py-2 outline-none mb-5"
          placeholder="Please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => handleSubmit(e)}
        />
        <button
          onClick={onClose}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition cursor-pointer"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default RestrictionPopup;
