import type { ColumnDef } from "@/components/shared/datatable";
import { Badge } from "@/components/ui/badge";

import { ProfileData } from "@/models/response/profileResponse";
import { getSpecialization } from "../helper";
import { formatDate } from "date-fns";

export const profileColumn: ColumnDef<ProfileData>[] = [
  {
    id: "id",
    header: "ID",
    accessorKey: "id",
    cell: (row) => <span className="line-clamp-1">{row?.id}</span>,
    sortable: true,
  },
  {
    id: "first_name",
    header: "Name",
    accessorKey: "first_name",
    cell: (row) => (
      <span className="line-clamp-1 font-brfirma-bold">{row.first_name} {' '} {row.last_name}</span>
    ),
    sortable: true,
  },
  {
    id: "university",
    header: "University",
    accessorKey: "university",
    cell: (row) => <span className=" line-clamp-1">{row.university}</span>,
    sortable: true,
    filterType: "select",
  },
  {
    id: "gpa",
    header: "GPA",
    accessorKey: "gpa",
    sortable: true,
    cell: (row) => <span>{row.gpa}</span>,
  },
  {
    id: "email",
    header: "Email",
    accessorKey: "email",
    sortable: true,
    cell: (row) => <span className=" ">{row.email}</span>,
  },
  {
    id: "nysc",
    header: "Nysc Status",
    accessorKey: "nysc_status",
    sortable: true,
    cell: (row) => <span className=" ">{row.nysc_status}</span>,
  },
  {
    id: "specialization",
    header: "Specialization",
    accessorKey: "specialization",
    cell: (row) => (
      <div className="">
        <Badge
          variant="outline"
          className={getSpecialization(row.specialization)}
        >
          {row.specialization.toUpperCase()}
        </Badge>
      </div>
    ),
    sortable: true,
    filterType: "select",
    filterOptions: [
      { label: "Active", value: "Active" },
      { label: "Pending", value: "Pending" },
    ],
  },
  {
    id: "field_of_study",
    header: "Field of Study",
    accessorKey: "field_of_study",
    sortable: true,
    cell: (row) => <span className=" ">{row.field_of_study}</span>,
  },
  
  {
    id: "paymentType",
    header: "Payment Type",
    accessorKey: "paymentType",
    sortable: true,
    cell: (row) => <span className=" ">{row.paymentType}</span>,
  },
  
  {
    id: "created_at",
    header: "Date Created",
    headerClassName: "text-right",
    accessorKey: "created_at",
    sortable: true,
    cell: (row) => (
      <span className="text-right line-clamp-1 block ">
        {formatDate(row.created_at, 'MM/dd/yyyy')}
      </span>
    ),
  },
];
