"use client";

import PropertyForm from "@/components/property-form";
import { z } from "zod";
import { propertySchema } from "@/validation/propertySchema";
import { PlusCircleIcon } from "lucide-react";
import { useAuth } from "@/context/auth";
import { SaveNewProperty } from "./actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function NewPropertyForm() {
  const auth = useAuth();
  const router = useRouter();

  const handleSubmit = async (data: z.infer<typeof propertySchema>) => {
    const token = await auth?.currentUser?.getIdToken();
    if (!token) {
      return;
    }
    const response = await SaveNewProperty({ ...data, token });
    console.log(response);
    if (!!response.error) {
      toast.error("Error");
      return;
    }

    if (!response.error) {
      toast.success("Property created successfully", {
        className: "bg-green-500 text-white",
      });
      router.push("/admin-dashboard");
    }
  };

  return (
    <div>
      <PropertyForm
        handleSubmit={handleSubmit}
        submitButtonLabel={
          <>
            <PlusCircleIcon /> Create Property
          </>
        }
      />
    </div>
  );
}
