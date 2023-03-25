"use client";
import React from "react";

import { usePathname} from "next/navigation";

export default function page() {
  const router = usePathname();
  return <div>hi doctor from appointments</div>;
}
