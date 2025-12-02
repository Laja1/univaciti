"use client"
import StepGuard from "@/components/layout/step-guard";
import { TesaApplicationForm } from "@/components/tesa-application-layout";
import React from "react";

export default function Page() {
  return (
    <div>
      <StepGuard><TesaApplicationForm /></StepGuard>
    </div>
  );
}
