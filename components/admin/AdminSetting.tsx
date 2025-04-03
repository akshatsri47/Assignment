"use client";

import { useState } from "react";
import { X } from "lucide-react";
import PermissionToggle from "./adminsetting/PermissionToggle";
import AccessLevelDropdown from "./adminsetting/AccessLevel";
import ActionButtons from "./adminsetting/ActionButton";

import {AdminSettingsModalProps} from "../../types/index";



export default function AdminSettingsModal({ admin, onClose }: AdminSettingsModalProps) {
  const [billingAccess, setBillingAccess] = useState(true);
  const [inviteUsers, setInviteUsers] = useState(true);
  const [removeUsers, setRemoveUsers] = useState(true);
  const [renewPlan, setRenewPlan] = useState(true);
  const [changePlanSettings, setChangePlanSettings] = useState(true);

  const [accessLevel, setAccessLevel] = useState(admin.access || "Full Access");

  const handleRemoveUser = () => {
    
  };

  const handleUpdateAccess = () => {
    
  };

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative bg-white rounded-t-2xl p-5 h-2/3 overflow-y-auto">
        <div className="w-full flex justify-between items-center pb-4 mb-5 relative">
          <h2 className="text-lg font-medium text-[#181D27] font-primary whitespace-nowrap">
            Admin settings
          </h2>
          <button onClick={onClose} className="text-gray-400">
            <X size={20} />
          </button>
          <div className="absolute inset-x-0 bottom-0 border-b border-gray-300"></div>
        </div>

        <h3 className="text-lg font-light mb-4 font-primary text-[#181D27]">
          {admin.name}
        </h3>

        <div className="mb-5">
          <AccessLevelDropdown selected={accessLevel} onSelect={setAccessLevel} />
        </div>

        <div className="space-y-1 mb-6">
          <h4 className="text-base font-primary font-medium mb-3">Permissions</h4>

          <PermissionToggle
            label="Accept user invites"
            checked={inviteUsers}
            onChange={setInviteUsers}
          />

          <PermissionToggle
            label="Billing access"
            checked={billingAccess}
            onChange={setBillingAccess}
          />

          <PermissionToggle
            label="Remove users"
            checked={removeUsers}
            onChange={setRemoveUsers}
          />

          <PermissionToggle
            label="Renew plan"
            checked={renewPlan}
            onChange={setRenewPlan}
          />

          <PermissionToggle
            label="Change plan settings"
            checked={changePlanSettings}
            onChange={setChangePlanSettings}
          />
        </div>

        <ActionButtons
          onRemoveUser={handleRemoveUser}
          onUpdateAccess={handleUpdateAccess}
        />
      </div>
    </div>
  );
}
