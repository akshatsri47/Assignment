"use client";

import { useState } from "react";
import AdminCard from "../components/admin/AdminCard";
import AdminSettingsModal from "../components/admin/AdminSetting";
import Header from "../components/groupplan/Header";

export default function AdminsPage() {
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [showSettings, setShowSettings] = useState(false);

  const admins = [
    { id: 1, name: "John Johnson", image: "/api/placeholder/40/40", access: "Full Access" },
    { id: 2, name: "Jane Cooper", image: "/api/placeholder/40/40", access: "Partial Access" },
    { id: 3, name: "Alex Smith", image: "/api/placeholder/40/40", access: "Partial Access" },
    { id: 4, name: "Emily Davis", image: "/api/placeholder/40/40", access: "Partial Access" },
  ];

  const handleOpenSettings = (admin) => {
    setSelectedAdmin(admin);
    setShowSettings(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center">
      <Header title="Admins" />
      <div className="w-[375px] p-4 flex flex-col gap-4">
        {admins.map((admin) => (
          <AdminCard
            key={admin.id}
            id={admin.id}
            name={admin.name}
            image={admin.image}
            access={admin.access}
            onMoreClick={() => handleOpenSettings(admin)}
          />
        ))}
        
        {/* Add Admin Button */}
        <button className="w-full py-3 border border-purple-300 rounded-lg text-purple-600 font-medium flex items-center justify-center">
          <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12h14" />
          </svg>
          Add Admin
        </button>
        <div className="text-center mt-1 text-xs text-gray-400">Fill (343) × 44</div>
      </div>

      {showSettings && selectedAdmin && (
        <AdminSettingsModal 
          admin={selectedAdmin} 
          onClose={() => setShowSettings(false)} 
        />
      )}
    </div>
  );
}