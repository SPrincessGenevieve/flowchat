"use client";

import { useState } from "react";
import { PageHeader } from "@/components/ui/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { downloadPdf } from "@/lib/download-pdf";
import { LeadImportsPdf } from "@/lib/lead-imports-pdf";
import { exportLeadImportsToExcel } from "@/lib/excel-utils";
import { toast } from "sonner";
import {
  IconCircleCheck,
  IconCircleX,
  IconFileSpreadsheet,
  IconFileText,
  IconPlus,
  IconTrash,
} from "@tabler/icons-react";

interface Group {
  id: string;
  name: string;
  joined: boolean;
}

export default function LeadImportsPage() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"Joined" | "Not Joined">("Not Joined");
  const [groups, setGroups] = useState<Group[]>([
    { id: "1", name: "Facebook Community", joined: true },
    { id: "2", name: "LinkedIn Professional Group", joined: false },
  ]);
  const [newGroupName, setNewGroupName] = useState("");

  const addGroup = () => {
    if (!newGroupName.trim()) return;
    setGroups([
      ...groups,
      { id: Date.now().toString(), name: newGroupName, joined: false },
    ]);
    setNewGroupName("");
  };

  const removeGroup = (id: string) => {
    setGroups(groups.filter((g) => g.id !== id));
  };

  const toggleGroup = (id: string) => {
    setGroups(
      groups.map((g) => (g.id === id ? { ...g, joined: !g.joined } : g)),
    );
  };

  const handleExportPdf = async () => {
    try {
      await downloadPdf(
        <LeadImportsPdf name={name} status={status} groups={groups} />,
        "lead-imports.pdf",
      );
      toast.success("PDF downloaded successfully");
    } catch (error) {
      toast.error("Failed to generate PDF");
      console.error(error);
    }
  };

  const handleExportExcel = () => {
    try {
      exportLeadImportsToExcel({ name, status, groups });
      toast.success("Excel file downloaded successfully");
    } catch (error) {
      toast.error("Failed to generate Excel file");
      console.error(error);
    }
  };

  return (
    <div className="mx-auto pb-20">
      <PageHeader
        tag="Playbooks"
        title="Lead Imports"
        description="A specialized form to track and export lead acquisition status. Input lead details, manage group connectivity, and download reports for your records."
      />

      <div className="grid gap-8 mt-10">
        {/* Main Info Section */}
        <Card className="bg-black/20 border border-primary-blue-100/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-white font-bold flex items-center gap-2">
              General Lead Information
            </CardTitle>
            <CardDescription className="text-white/70">
              Enter the primary details for the lead import
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="lead-name" className="text-sm font-medium">
                Lead Full Name
              </Label>
              <Input
                id="lead-name"
                placeholder="e.g. John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-primary-blue-100/20 focus-visible:ring-primary"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-medium">
                Overall Joined Status
              </Label>
              <div className="flex gap-4">
                <Button
                  variant={status === "Joined" ? "default" : "outline"}
                  onClick={() => setStatus("Joined")}
                  className="flex-1 gap-2 bg-linear-90 from-primary-blue-100 to-violet-400 border-none text-white"
                >
                  <IconCircleCheck className="w-4 h-4" />
                  Joined
                </Button>
                <Button
                  variant={status === "Not Joined" ? "destructive" : "outline"}
                  onClick={() => setStatus("Not Joined")}
                  className="flex-1 gap-2 bg-red-800 text-red-200"
                >
                  <IconCircleX className="w-4 h-4" />
                  Not Joined
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Groups Management */}
        <Card className="bg-black/20 border border-primary-blue-100/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-xl text-white font-bold">
              Groups Tracking
            </CardTitle>
            <CardDescription className="text-white/70">
              Manage the list of groups this lead has interacted with
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex gap-2">
              <Input
                placeholder="Add new group name..."
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addGroup()}
                className="bg-primary-blue-100/20 border border-primary-blue-100"
              />
              <Button
                onClick={addGroup}
                size="icon"
                className="shrink-0 bg-primary-blue-100"
              >
                <IconPlus className="w-4 h-4" />
              </Button>
            </div>

            <div className="rounded-lg border border-primary-blue-100 bg-muted/10">
              <div className="divide-y divide-primary-blue-100">
                {groups.length === 0 ? (
                  <div className="p-8 text-center text-white/70 italic">
                    No groups added yet.
                  </div>
                ) : (
                  groups.map((group) => (
                    <div
                      key={group.id}
                      className="flex items-center justify-between p-4 hover:bg-primary-blue-100/20 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <Checkbox
                          id={`group-${group.id}`}
                          checked={group.joined}
                          onCheckedChange={() => toggleGroup(group.id)}
                        />
                        <Label
                          htmlFor={`group-${group.id}`}
                          className={`text-sm cursor-pointer ${group.joined ? "font-semibold text-white" : "text-white/70"}`}
                        >
                          {group.name}
                        </Label>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeGroup(group.id)}
                        className="text-red-800/70 hover:text-destructive hover:bg-destructive/10"
                      >
                        <IconTrash className="w-4 h-4" />
                      </Button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Export Actions */}
        <Card className="bg-black/20 border border-primary-blue-100/500 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
            <IconFileText className="w-24 h-24 rotate-12" />
          </div>
          <CardHeader>
            <CardTitle className="text-xl text-white font-bold">
              Export Data
            </CardTitle>
            <CardDescription className="text-white/70">
              Download the current lead information in your preferred format
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Button
                variant="outline"
                size="lg"
                className="h-16 gap-3 bg-primary-blue-100/30 text-base border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all shadow-sm"
                onClick={handleExportPdf}
              >
                <IconFileText className="w-6 h-6 text-indigo-500" />
                <div className="text-left">
                  <div className="font-bold text-white">Download PDF</div>
                  <div className="text-xs text-white/70">
                    Standard Report Format
                  </div>
                </div>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="h-16 gap-3 bg-primary-blue-100/30 text-base border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all shadow-sm"
                onClick={handleExportExcel}
              >
                <IconFileSpreadsheet className="w-6 h-6 text-emerald-500" />
                <div className="text-left">
                  <div className="font-bold text-white">Download Excel</div>
                  <div className="text-xs text-white/70">
                    spreadsheet / CSV Data
                  </div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
