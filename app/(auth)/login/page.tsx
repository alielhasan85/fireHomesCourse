import ContinueWithGoogleButton from "@/components/google-account-button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Login() {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Login </CardTitle>
        </CardHeader>
        <CardContent>
          <ContinueWithGoogleButton />
        </CardContent>
      </Card>
    </div>
  );
}
