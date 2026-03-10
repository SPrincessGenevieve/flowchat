import React, { useState, Fragment } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { IconShield, IconShieldLock, IconDots } from "@tabler/icons-react";
import { Button } from "./ui/button";
import { toastUI } from "./ui/Toaster";

export interface UserDetailT {
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

interface DataT {
  mockData: UserDetailT[];
  items_per_page?: number;
}

export default function PaginatedTable({
  mockData,
  items_per_page = 5,
}: DataT) {
  const [currentPage, setCurrentPage] = useState(1);
  const ITEMS_PER_PAGE = items_per_page; // adjust per page

  const totalPages = Math.ceil(mockData.length / ITEMS_PER_PAGE);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = mockData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleCopyEmail = async (index: number) => {
    const data = mockData[index];

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

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex">
        <Input className="w-66" placeholder="search by name or email" />
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {["Name", "Email", "Status", "Training", "Certified", "Action"].map(
              (item, i) => (
                <TableCell key={i}>
                  <Label
                    className={`w-full flex ${
                      item === "Action" ? "justify-center" : ""
                    }`}
                  >
                    {item}
                  </Label>
                </TableCell>
              ),
            )}
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedData.map((item, i) => (
            <TableRow key={i}>
              <TableCell>
                <Label>
                  {item.first_name} {item.last_name}
                </Label>
              </TableCell>
              <TableCell>
                <Label>{item.email}</Label>
              </TableCell>
              <TableCell>
                <div className="flex">
                  <div
                    className={`p-2 rounded-full ${
                      item.status === "Active"
                        ? "bg-primary-blue-100/30"
                        : "bg-red-500/30"
                    }`}
                  >
                    <Label
                      className={`${
                        item.status === "Active"
                          ? "text-blue-300"
                          : "text-red-300"
                      }`}
                    >
                      {item.status}
                    </Label>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <Label>{item.training}</Label>
              </TableCell>
              <TableCell>
                <div className="w-full flex gap-4">
                  {item.certificate ? (
                    <IconShield className="text-green-400" size={16} />
                  ) : (
                    <IconShieldLock className="text-red-500" size={16} />
                  )}
                  <Label
                    className={`${
                      item.certificate ? "text-green-400" : "text-red-500"
                    }`}
                  >
                    {item.certificate ? "Yes" : "No"}
                  </Label>
                </div>
              </TableCell>
              <TableCell>
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
                              ? handleCopyEmail(i)
                              : console.log("View details", item)
                          }
                        >
                          {action}
                        </DropdownMenuItem>
                      </Fragment>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-end gap-4 mt-4">
        <Button
          className="px-4 py-2 bg-gray-300 disabled:opacity-50"
          onClick={handlePrevious}
          disabled={currentPage === 1}
        >
          Previous
        </Button>
        <Label className="flex items-center">
          Page {currentPage} of {totalPages}
        </Label>
        <Button
          className="px-4 py-2 bg-gray-300 disabled:opacity-50"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
