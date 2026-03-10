"use client";

import AddVirtualAssistant from "@/components/admin/virtual-assistant/AddVirtualAssistant";
import UserDetailsForm from "@/components/admin/virtual-assistant/UserDetailsForm";
import UserPasswordForm from "@/components/admin/virtual-assistant/UserPasswordForm";
import DynamicTable, { Column } from "@/components/DynamicTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toastUI } from "@/components/ui/Toaster";
import WelcomeSection from "@/components/va/dashboard/WelcomeSection";
import {
  IconDots,
  IconPlus,
  IconShield,
  IconShieldLock,
} from "@tabler/icons-react";
import { i } from "motion/react-client";
import { Fragment, useEffect, useState } from "react";

interface UserDetailT {
  first_name: string;
  last_name: string;
  middle_name: string;
  name_ext: string;
  email: string;
  contact_no: string;
  status: string;
  training: string;
  certificate: boolean;
}

const mockData = [
  {
    first_name: "Mike",
    last_name: "Thompson",
    middle_name: "Andrew",
    name_ext: "Jr.",
    email: "mike.thompson@email.com",
    contact_no: "555-0101",
    status: "Active",
    training: "Completed",
    certificate: true,
  },
  {
    first_name: "Sarah",
    last_name: "Williams",
    middle_name: "Jane",
    name_ext: "",
    email: "sarah.williams@email.com",
    contact_no: "555-0102",
    status: "Active",
    training: "Pending",
    certificate: false,
  },
  {
    first_name: "David",
    last_name: "Rodriguez",
    middle_name: "Luis",
    name_ext: "III",
    email: "david.rodriguez@email.com",
    contact_no: "555-0103",
    status: "Inactive",
    training: "Not Started",
    certificate: false,
  },
  {
    first_name: "Emily",
    last_name: "Johnson",
    middle_name: "Rose",
    name_ext: "",
    email: "emily.johnson@email.com",
    contact_no: "555-0104",
    status: "Active",
    training: "Completed",
    certificate: true,
  },
  {
    first_name: "James",
    last_name: "Anderson",
    middle_name: "Edward",
    name_ext: "Sr.",
    email: "james.anderson@email.com",
    contact_no: "555-0105",
    status: "Active",
    training: "Pending",
    certificate: false,
  },
  {
    first_name: "Olivia",
    last_name: "Martinez",
    middle_name: "Sofia",
    name_ext: "",
    email: "olivia.martinez@email.com",
    contact_no: "555-0106",
    status: "Inactive",
    training: "Not Started",
    certificate: false,
  },
  {
    first_name: "Daniel",
    last_name: "Lee",
    middle_name: "Patrick",
    name_ext: "",
    email: "daniel.lee@email.com",
    contact_no: "555-0107",
    status: "Active",
    training: "Completed",
    certificate: true,
  },
  {
    first_name: "Sophia",
    last_name: "Brown",
    middle_name: "Grace",
    name_ext: "",
    email: "sophia.brown@email.com",
    contact_no: "555-0108",
    status: "Active",
    training: "Pending",
    certificate: false,
  },
  {
    first_name: "Matthew",
    last_name: "Garcia",
    middle_name: "Alexander",
    name_ext: "II",
    email: "matthew.garcia@email.com",
    contact_no: "555-0109",
    status: "Inactive",
    training: "Not Started",
    certificate: false,
  },
  {
    first_name: "Isabella",
    last_name: "Davis",
    middle_name: "Marie",
    name_ext: "",
    email: "isabella.davis@email.com",
    contact_no: "555-0110",
    status: "Active",
    training: "Completed",
    certificate: true,
  },
];

export default function VirtualAssisstantAdmin() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [dialogDetail, setDialogDetail] = useState(false);
  const [data, setData] = useState(mockData[selectedIndex]);

  const handleCopyEmail = async () => {
    const data = mockData[selectedIndex];

    try {
      await navigator.clipboard.writeText(data.email);
      toastUI.success({
        title: "Email copied successfully.",
      });
    } catch (err) {
      toastUI.error({
        title: "Failed to copy.",
      });
      console.error("Failed to copy", err);
    }
  };

  const handleViewDetails = () => {
    setSelectedIndex(selectedIndex);
    setDialogDetail(true);
  };

  const columns: Column<UserDetailT>[] = [
    {
      key: "name",
      title: "Name",
      render: (row) => (
        <Label>
          {row.first_name} {row.last_name}
        </Label>
      ),
    },
    {
      key: "email",
      title: "Email",
      render: (row) => <Label>{row.email}</Label>,
    },
    {
      key: "status",
      title: "Status",
      render: (row) => (
        <div className="flex">
          <div
            className={`p-2 rounded-full ${
              row.status === "Active"
                ? "bg-primary-blue-100/30"
                : "bg-red-500/30"
            }`}
          >
            <Label
              className={`${row.status === "Active" ? "text-blue-300" : "text-red-300"}`}
            >
              {row.status}
            </Label>
          </div>
        </div>
      ),
    },
    {
      key: "training",
      title: "Training",
      render: (row) => <Label>{row.training}</Label>,
    },
    {
      key: "certificate",
      title: "Certified",
      render: (row) => (
        <div className="w-full flex gap-2 items-center">
          {row.certificate ? (
            <IconShield className="text-green-400" size={16} />
          ) : (
            <IconShieldLock className="text-red-500" size={16} />
          )}
          <Label
            className={`${row.certificate ? "text-green-400" : "text-red-500"}`}
          >
            {row.certificate ? "Yes" : "No"}
          </Label>
        </div>
      ),
    },
    {
      key: "action",
      title: "Action",
      render: (row) => (
        <DropdownMenu>
          <DropdownMenuTrigger className="w-full">
            <div className="w-full flex items-center justify-center">
              <IconDots className="text-white" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            {["Copy email", "View details"].map((action, ii) => (
              <Fragment key={ii}>
                {action === "View details" && <DropdownMenuSeparator />}
                <DropdownMenuItem
                  onClick={() =>
                    action === "Copy email"
                      ? handleCopyEmail()
                      : handleViewDetails()
                  }
                >
                  {action}
                </DropdownMenuItem>
              </Fragment>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ];

  useEffect(() => {
    setData(mockData[selectedIndex]);
  }, [selectedIndex]);

  return (
    <div className="flex flex-col gap-8 dashboard-admin-cont">
      <WelcomeSection
        title={"Virtual Assistants"}
        desc={
          "Manage your team of VAs, track their training, and view certifications."
        }
      ></WelcomeSection>
      <div className="">
        <Card className="bg-primary-blue-100/20">
          <CardContent className="flex flex-col gap-8">
            <div className="flex justify-between gap-4">
              <Input
                placeholder="search by name or email"
                className="max-w-68"
              ></Input>
              <AddVirtualAssistant></AddVirtualAssistant>
            </div>
            <DynamicTable
              itemsPerPage={10}
              data={mockData}
              columns={columns}
            ></DynamicTable>
          </CardContent>
        </Card>

        <Dialog open={dialogDetail} onOpenChange={setDialogDetail}>
          <DialogContent
            style={{ transition: "none" }}
            className={`overflow-y-auto virtual-info-cont w-full min-w-200 bg-primary-blue-500 shadow-[0_0_10px_0px_#ffffff]`}
          >
            <DialogDescription></DialogDescription>
            <DialogHeader className="">
              <div className=" border-b border-primary-blue-100 pb-2">
                <DialogTitle className="flex justify-between ">
                  <Label className="font-semibold w-full text-xl">
                    Personal Information
                  </Label>
                  {data.status === "Active" ? (
                    <Button
                      variant={"ghost"}
                      className="bg-red-600 text-white hover:bg-red-800 hover:text-white"
                    >
                      Deactivate
                    </Button>
                  ) : (
                    <Button
                      variant={"ghost"}
                      className="bg-green-600 text-black hover:bg-green-800 hover:text-white"
                    >
                      Reactivate
                    </Button>
                  )}
                </DialogTitle>
              </div>
            </DialogHeader>
            <UserDetailsForm data={data}></UserDetailsForm>
            <UserPasswordForm></UserPasswordForm>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
