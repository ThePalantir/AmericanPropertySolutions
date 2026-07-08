import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Property Maintenance",
  description:
    "Property and building maintenance requests now start with the APS property maintenance service page."
};

export default function PropertyBuildingMaintenanceCompatibilityPage() {
  permanentRedirect("/services/property-maintenance");
}