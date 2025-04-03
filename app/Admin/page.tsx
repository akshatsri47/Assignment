"use client";

import { useState } from "react";
import AdminCard from "../../components/admin/AdminCard";
import AdminSettingsModal from "../../components/admin/AdminSetting";
import Header from "../../components/groupplan/Header";
import Adminstat from "../../components/admin/Adminstat";
import ProfileInfo from "../../components/groupplan/Profileinfo";
import Userplus from "../../public/Userplus.svg";
import { Admin } from "@/types";

export default function AdminsPage() {
  const [selectedAdmin, setSelectedAdmin] = useState<Admin | null>(null);
  const [showSettings, setShowSettings] = useState<boolean>(false);

  const admins: Admin[] = [
    { id: 1, name: "John Johnson", image: "/image.png", access: "Full Access" },
    { id: 2, name: "Jane Cooper", image: "/image2.png", access: "Partial Access" },
    { id: 3, name: "Alex Smith", image: "/image3.png", access: "Partial Access" },
    { id: 4, name: "Emily Davis", image: "/image4.png", access: "Partial Access" },
  ];

  const handleOpenSettings = (admin: Admin) => {
    setSelectedAdmin(admin);
    setShowSettings(true);
  };

  return (
    <div className="min-h-screen w-full bg-white flex flex-col items-center">
      {showSettings ? (
        // Admin Panel with ProfileInfo when modal is open
        <div className="w-full min-h-screen bg-gray-50">
          <Header title="Admin Panel" />
          <div className="w-full h-[70vh] max-w-md mx-auto p-4">
            {selectedAdmin && (
              <ProfileInfo
                // Pass props as required by ProfileInfo
              />
            )}
            <h2 className="text-xl font-medium mt-6 mb-4">Workspace admins</h2>
          </div>
        </div>
      ) : (
        // Original admin profile card page when modal is closed
        <>
          <Header title="Admins" />
          <div className="w-[90%] p-4 flex flex-col gap-4">
            <Adminstat />
            {admins.map((admin) => (
              <AdminCard
                key={admin.id}
                id={admin.id.toString()}
                name={admin.name}
                image={admin.image}
                access={admin.access}
                onMoreClick={() => handleOpenSettings(admin)}
              />
            ))}

            {/* Add Admin Button */}
            <button className="w-full py-3 border border-purple-300 rounded-lg text-purple-600 font-medium flex items-center justify-center">
              <Userplus className="w-5 h-5 mr-2" />
              Add Admin
            </button>
          </div>
        </>
      )}

      {showSettings && selectedAdmin && (
        <AdminSettingsModal
          admin={selectedAdmin}
          onClose={() => setShowSettings(false)}
        />
      )}
    </div>
  );
}
