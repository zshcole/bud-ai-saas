// app/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn appearance={{
        elements: {
          rootBox: "mx-auto",
          card: "shadow-lg"
        }
      }} />
    </div>
  );
}