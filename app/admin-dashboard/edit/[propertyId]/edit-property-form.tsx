"use client";

import PropertyForm from "@/components/property-form";
import { Property } from "@/types/properties";
import { propertyDataSchema } from "@/validation/propertySchema";
import { z } from "zod";

type props = Property;
export default function EditPropertyForm({
  address1,
  address2,
  city,
  postcode,
  price,
  bedrooms,
  bathrooms,
  description,
  status,
}: props) {
  const handleSubmit = async (data: z.infer<typeof propertyDataSchema>) => {};
  return (
    <div>
      <PropertyForm
        handleSubmit={handleSubmit}
        submitButtonLabel="save property"
        defaultValues={{
          address1,
          address2,
          city,
          postcode,
          price,
          description,
          bedrooms,
          bathrooms,
          status,
        }}
      />
    </div>
  );
}
