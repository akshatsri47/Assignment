"use client";

import { useState } from "react";
import { X, ChevronDown } from "lucide-react";

export default function AdminSettingsModal({ admin, onClose }) {
  // State for toggle switches
  const [billingAccess, setBillingAccess] = useState(true);
  const [inviteUsers, setInviteUsers] = useState(true);
  const [removeUsers, setRemoveUsers] = useState(true);
  const [renewPlan, setRenewPlan] = useState(true);
  const [changePlanSettings, setChangePlanSettings] = useState(true);

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Bottom sheet */}
      <div className="relative bg-white rounded-t-2xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-medium">Admin settings</h2>
          <button onClick={onClose} className="text-gray-400">
            <X size={20} />
          </button>
        </div>

        <h3 className="text-lg font-medium mb-4">{admin.name}</h3>

        <div className="mb-4">
          <div className="flex justify-between items-center">
            <span className="text-gray-700">Admin Controls</span>
            <div className="flex items-center space-x-1 px-3 py-2 border rounded-md relative">
              <span>{admin.access}</span>
              <ChevronDown size={16} />
              
              {/* Avatar badges */}
              <div className="absolute -right-3 -top-3">
                <img src="/api/placeholder/24/24" alt="Admin" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
              <div className="absolute -right-8 -top-3">
                <img src="/api/placeholder/24/24" alt="Admin" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-1 mb-6">
          <h4 className="text-base font-medium mb-2">Permissions</h4>
          
          <div className="flex justify-between items-center py-2">
            <span>Accept user invites</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={inviteUsers}
                onChange={() => setInviteUsers(!inviteUsers)}
              />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span>Billing access</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={billingAccess}
                onChange={() => setBillingAccess(!billingAccess)}
              />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span>Remove users</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={removeUsers}
                onChange={() => setRemoveUsers(!removeUsers)}
              />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span>Renew plan</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={renewPlan}
                onChange={() => setRenewPlan(!renewPlan)}
              />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
          
          <div className="flex justify-between items-center py-2">
            <span>Change plan settings</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input 
                type="checkbox" 
                className="sr-only peer" 
                checked={changePlanSettings}
                onChange={() => setChangePlanSettings(!changePlanSettings)}
              />
              <div className="w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-purple-600"></div>
            </label>
          </div>
        </div>

        <div className="flex justify-between gap-2 mt-4">
          <button className="w-1/2 py-3 border border-red-500 text-red-500 rounded-md font-medium">
            Remove User
          </button>
          <button className="w-1/2 py-3 bg-purple-600 text-white rounded-md font-medium">
            Update Access
          </button>
        </div>
      </div>
    </div>
  );
}