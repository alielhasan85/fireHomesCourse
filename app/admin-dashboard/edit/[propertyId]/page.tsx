import { Breadcrumbs } from "@/components/ui/breadcrumb";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPropertyById } from "@/data/properties";
import EditPropertyForm from "./edit-property-form";

export default async function EditProperty({
  params,
}: {
  params: Promise<{ propertyId: string }>;
}) {
  const paramsValue = await params;

  const property = await getPropertyById(paramsValue.propertyId);
  console.log({ property });

  // console.log(paramsValue);
  return (
    <div>
      <Breadcrumbs
        items={[
          { href: "/admin-dashboard", label: "Dashboard" },
          { label: "Edit Property" },
        ]}
      ></Breadcrumbs>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Edit Property</CardTitle>
        </CardHeader>
        <CardContent>
          <EditPropertyForm
            id={property.id}
            address1={property.address1}
            address2={property.address2}
            city={property.city}
            postcode={property.postcode}
            price={property.price}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            description={property.description}
            status={property.status}
          />
        </CardContent>
      </Card>
    </div>
  );
}
