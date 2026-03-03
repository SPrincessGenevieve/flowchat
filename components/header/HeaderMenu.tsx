"use client";

import React, { useState } from "react";
import { Label } from "../ui/label";
import { IconBolt, IconLogin } from "@tabler/icons-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import SlidingTabs from "@/components/ui/SlidingTabs";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Spinner } from "../ui/spinner";
import { toast } from "sonner";

export default function HeaderMenu() {
  const [loadingVA, setLoadingVA] = useState(false);
  const [loadingAdmin, setLoadingAdmin] = useState(false);
  const tabs = [
    { label: "Virtual Assistant", value: "va" },
    { label: "Admin", value: "admin" },
  ];

  const router = useRouter();

  const handleVA = () => {
    try {
      setLoadingVA(true);
      router.push("/virtual-assistant/dashboard");
      toast.success("Login successfully. Redirecting to dashboard...");
    } catch (error) {
    } finally {
    }
  };

  const handleAdmin = () => {
    try {
      setLoadingAdmin(true);
      router.push("/admin");
      toast.success("Login successfully. Redirecting to dashboard...");
    } catch (error) {
    } finally {
    }
  };

  return (
    <div className="fixed  px-4 justify-between items-center flex top-0 z-100 bg-primary-blue-500/70 w-full h-14">
      <Link href={"/"}>
        <div className="flex items-center gap-2">
          <IconBolt className="text-white"></IconBolt>
          <div>
            <Label>FlowChat SOP</Label>
          </div>
        </div>
      </Link>
      <div>
        <Dialog>
          <DialogTrigger className="flex p-2 h-10 rounded-sm gap-2 bg-linear-90 from-primary-blue-100 to-purple-500">
            <IconLogin className="text-white"></IconLogin>
            <Label>Login</Label>
          </DialogTrigger>
          <DialogContent className="bg-primary-blue-600">
            <DialogHeader className="flex flex-col items-center justify-center">
              <DialogTitle className="text-3xl font-bold text-white">
                Welcome Back
              </DialogTitle>
              <DialogDescription className="">
                Please sign in to access your workspace
              </DialogDescription>
            </DialogHeader>
            <div>
              <SlidingTabs defaultValue="va" tabs={tabs}>
                <div data-tab="va">
                  <Card className="bg-blue-50/10 min-h-70">
                    <CardContent className="flex flex-col gap-4 ">
                      <div>
                        <Label className="text-xl font-semibold">
                          VA Portal Login
                        </Label>
                        <Label className="text-sm font-light">
                          Enter your credentials to manage your assigned
                          accounts.
                        </Label>
                      </div>
                      <div className="mt-4 flex flex-col gap-2">
                        <Input
                          label="Email"
                          placeholder="example@gmail.com"
                        ></Input>
                        <Input
                          label="Password"
                          placeholder="*********"
                          type="password"
                        ></Input>
                      </div>
                      <Button
                        onClick={handleVA}
                        className="w-full bg-linear-90 from-primary-blue-100 to-primary-blue-200"
                      >
                        {loadingVA && <Spinner></Spinner>}
                        Login
                      </Button>
                    </CardContent>
                  </Card>
                </div>
                <div data-tab="admin">
                  <Card className="bg-blue-50/10 min-h-70">
                    <CardContent className="flex flex-col gap-4">
                      <div>
                        <Label className="text-xl font-semibold">
                          Admin Portal Login
                        </Label>
                        <Label className="text-sm font-light">
                          Sign in to manage your VAs, view reports, and
                          configure rules.
                        </Label>
                      </div>
                      <div className="mt-4 flex flex-col gap-2">
                        <Input
                          label="Email"
                          placeholder="example@gmail.com"
                        ></Input>
                        <Input
                          label="Password"
                          placeholder="*********"
                          type="password"
                        ></Input>
                      </div>
                      <Button
                        onClick={handleAdmin}
                        className="w-full bg-linear-90 from-primary-blue-100 to-primary-blue-200"
                      >
                        {loadingAdmin && <Spinner></Spinner>}
                        Login
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </SlidingTabs>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
