import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import WelcomeSection from "@/components/va/dashboard/WelcomeSection";
import { IconDeviceFloppy, IconLock } from "@tabler/icons-react";
import React from "react";

export default function SettingsAdmin() {
  return (
    <div className="flex flex-col gap-8 pb-8 dashboard-admin-cont">
      <WelcomeSection
        title={"Settings"}
        desc={"Manage your account settings and platform preferences"}
      ></WelcomeSection>
      <Card className="bg-primary-blue-100/10">
        <CardContent className="flex gap-4 flex-col ">
          <div>
            <Label className="text-xl font-semibold">Profile Information</Label>
            <Label className="font-normal">
              Update your personal information and contact details
            </Label>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 settings-cont">
              <Input label="First Name"></Input>
              <Input label="Middle Name"></Input>
              <Input label="Last Name"></Input>
              <Input label="Name Ext."></Input>
            </div>
            <div className="grid grid-cols-2 gap-4 settings-cont">
              <Input label="Email Address"></Input>
              <Input label="Contact Number"></Input>
            </div>
          </div>
          <div>
            <Button>Save Changes</Button>
          </div>
        </CardContent>
      </Card>
      <Card className="bg-primary-blue-100/10">
        <CardContent className="flex gap-4 flex-col">
          <div>
            <Label className="text-xl font-semibold">Security</Label>
            <Label className="font-normal">
              Stronger passwords mean better security. Keep yours private.
            </Label>
          </div>
          <div className="mt-8 flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4 settings-cont">
              <Input type="password" label="Current Password"></Input>
              <Input type="password" label="New Password"></Input>
              <Input type="password" label="Update Password"></Input>
            </div>
          </div>
          <div>
            <Button>Update Password</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
