"use client"
import { DataTable } from "@/components/shared/datatable";
import { Eye,  } from "lucide-react";
import { useState } from "react";
// import { useModal } from "@/components/shared/modal";

import NiceModal from "@ebay/nice-modal-react";
import { Card } from "@/components/ui/card";
import { useGetProfileQuery } from "@/service/profile";
import { profileColumn } from "@/utils/constants/columns";
import { ProfileData } from "@/models/response/profileResponse";
import { ModalConstant } from "@/components/modals/register";
import { toast } from "sonner";
import { ErrorHandler } from "@/service/httpClient/errorHandler";
// Cute Data Flow Loader Component

export default function Page () {
  const [rowId, setRowId] = useState(0);
  const actions = [
    {
      label: "View",
      icon: Eye,
      onClick: (row: ProfileData) => {
        NiceModal.show(ModalConstant.ConfirmModal, row);
      },
    },
    // {
    //   label: "Edit",
    //   icon: Edit,
    //   onClick: (row: HouseItem) => {
    //     console.log("Edit server room:", row.HouseItem);
    //     // TODO: Implement edit functionality
    //   },
    // },
   
  ];
  const { data, isLoading } =
    useGetProfileQuery(
      
    );
 
  const handleRowClick = async (row: ProfileData) => {
    setRowId(row.id);

    try {
    } catch (error) {
      toast.error(ErrorHandler.extractMessage(error))
    }
  };
  return (
    <div className=" h-full">
    
      <Card className="mx-5 px-5 mt-5 rounded-sm">
        <DataTable
          data={data?.data ?? []}
          columns={profileColumn}
          isLoading={isLoading}
          filterableColumns={["houseStatus"]}
          title="Student Profile"
          searchPlaceholder="Search server house by name, ID, or code..."
          pageSize={5}
          actions={actions}
          onRowClick={handleRowClick}
          highlightedRowId={rowId}
          getRowId={(row) => row.id}
          initialSorting={{ id: "id", desc: false }}
        />
      </Card>

      
    </div>
  );
};
