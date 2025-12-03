"use client"
import { DataTable } from "@/components/shared/datatable";
import { Eye } from "lucide-react";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useGetProfileQuery } from "@/service/profile";
import { profileColumn } from "@/utils/constants/columns";
import { ProfileData } from "@/models/response/profileResponse";
import { toast } from "sonner";
import { ErrorHandler } from "@/service/httpClient/errorHandler";

export default function Page() {
  const [rowId, setRowId] = useState(0);
  
  const actions = [
    {
      label: "View",
      icon: Eye,
      onClick: (row: ProfileData) => {
      console.log(row)
      },
    },
  ];
  
  const { data, isLoading } = useGetProfileQuery();

  const handleRowClick = async (row: ProfileData) => {
    setRowId(row.id);
    try {
      // Your row click logic here
    } catch (error) {
      toast.error(ErrorHandler.extractMessage(error));
    }
  };

  return (
    <div className="h-full">
      <Card className="mx-5 px-5 mt-5 rounded-sm">
        <DataTable
          data={data?.data ?? []}
          columns={profileColumn}
          isLoading={isLoading}
          filterableColumns={["nysc_status", "gender"]}
          title="Student Profile"
          searchPlaceholder="Search by name, email, university..."
          pageSize={10}
          actions={actions}
          onRowClick={handleRowClick}
          highlightedRowId={rowId}
          getRowId={(row) => row.id}
          initialSorting={{ id: "id", desc: false }}
          showDownload={true}
          exportOptions={{
            filename: `student_profile_${new Date().toISOString().split("T")[0]}`,
            includeHeaders: true,
            exportAllFields: true, // 🔥 THIS EXPORTS ALL FIELDS FROM API
          }}
        />
      </Card>
    </div>
  );
}