"use client";
import React, { useState } from "react";
import Header from "../../components/groupplan/Header";
import StatusBar from "../../components/groupplan/StatusBar";
import Toggle from "../../utils/toogle";

export default function GroupSettings() {
  const [adminsAcceptInvites, setAdminsAcceptInvites] = useState(true);
  const [usersRenewPlan, setUsersRenewPlan] = useState(true);
  const [marketingUpdates, setMarketingUpdates] = useState(true);
  const [subscriptionLapse, setSubscriptionLapse] = useState(true);
  const [newUserAdded, setNewUserAdded] = useState(true);

  return (
    <div className="bg-white min-h-screen font-primary text-[#414651]">
      
      <Header title="Group Settings" />

      <div className="px-4 pt-6">
        <h2 className="text-xl font-medium text-[#414651] mb-4">Permissions</h2>

        <div className="flex items-center justify-between py-3">
          <span className="text-base font-normal">Admins may accept user invites</span>
          <Toggle
            checked={adminsAcceptInvites}
            onChange={(e) => setAdminsAcceptInvites(e.target.checked)}
          />
        </div>

        <div className="flex items-center justify-between py-3 mb-4">
          <span className="text-base font-normal">Let users renew plan</span>
          <Toggle
            checked={usersRenewPlan}
            onChange={(e) => setUsersRenewPlan(e.target.checked)}
          />
        </div>

        <div className="border-t border-gray-200 pt-4">
          <h2 className="text-xl font-medium my-4">Email notifications</h2>

          <div className="flex items-center justify-between py-3">
            <span className="text-base font-normal">Marketing Updates</span>
            <Toggle
              checked={marketingUpdates}
              onChange={(e) => setMarketingUpdates(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="text-base font-normal">Subscription Lapse</span>
            <Toggle
              checked={subscriptionLapse}
              onChange={(e) => setSubscriptionLapse(e.target.checked)}
            />
          </div>

          <div className="flex items-center justify-between py-3">
            <span className="text-base font-normal">New User Added</span>
            <Toggle
              checked={newUserAdded}
              onChange={(e) => setNewUserAdded(e.target.checked)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}