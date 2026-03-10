"use client";
import React, { JSX, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

// Column type
export interface Column<T> {
  key: keyof T | string; // key in data object or special string
  title: string;
  render?: (row: T) => React.ReactNode; // optional custom cell renderer
}

interface DynamicTableProps<T> {
  data: T[];
  columns: Column<T>[];
  itemsPerPage?: number;
}

export default function DynamicTable<T>({
  data,
  columns,
  itemsPerPage = 5,
}: DynamicTableProps<T>): JSX.Element {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Slice data for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedData = data.slice(startIndex, startIndex + itemsPerPage);

  const handlePrevious = () => setCurrentPage((prev) => Math.max(prev - 1, 1));
  const handleNext = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div className="flex flex-col gap-4">
      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.key as string}>
                <Label
                  className={`w-full flex ${
                    col.title === "Action" ? "justify-center" : ""
                  }`}
                >
                  {col.title}
                </Label>
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody>
          {paginatedData.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {columns.map((col) => (
                <TableCell key={col.key as string}>
                  {col.render ? col.render(row) : (row as any)[col.key]}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex justify-end items-center gap-4">
        <Button size="sm" onClick={handlePrevious} disabled={currentPage === 1}>
          Previous
        </Button>
        <Label>
          Page {currentPage} of {totalPages}
        </Label>
        <Button
          size="sm"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
