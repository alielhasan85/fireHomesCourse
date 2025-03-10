import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getProperties } from "@/data/properties";
import { PencilIcon } from "lucide-react";
import Link from "next/link";

export default async function PropertiesTable({ page = 1 }: { page?: number }) {
  const { data, totalPages } = await getProperties({
    pagination: {
      page: page,
      pageSize: 3,
    },
  });

  return (
    <>
      {!data && (
        <h1 className="text-center text-zinc-400 py-20 font-bold text-3xl">
          No Properties{" "}
        </h1>
      )}

      {!!data && (
        <Table className="mt-5">
          <TableHeader>
            <TableRow>
              <TableHead>Address</TableHead>
              <TableHead>Listing Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((property) => {
              const address = [
                property.address1,
                property.address2,
                property.city,
                property.postcode,
              ]
                .filter((address1) => !!address1)
                .join(", ");
              return (
                <TableRow key={property.id}>
                  <TableCell>{address}</TableCell>
                  <TableCell>{property.price}</TableCell>
                  <TableCell>{property.status}</TableCell>
                  <TableCell>
                    View
                    <Button asChild variant="outline" className="sm">
                      <Link href={`/admin-dashboard/edit/${property.id}`}>
                        <PencilIcon />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4} className="text-center">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <Button
                    key={index}
                    asChild
                    variant="outline"
                    className="mx-1"
                  >
                    <Link href={`/admin-dashboard?page=${index + 1}`}>
                      {index + 1}
                    </Link>
                  </Button>
                ))}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      )}
    </>
  );
}
