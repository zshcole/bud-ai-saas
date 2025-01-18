
import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignUp appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-lg"
        }
      }} />
    </div>
  );
}