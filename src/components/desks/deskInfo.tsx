import { Desk } from "@prisma/client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";

export const DeskInfoCard = ({ desk }: { desk: Desk }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{desk.deskName}</CardTitle>
        <CardDescription>{desk.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <p>Desk Amenities</p>
        <ul>
          {}
          <li></li>
        </ul>
      </CardContent>
    </Card>
  );
};
