// app/sign-in/[[...sign-in]]/page.ts
import { redirect } from "next/navigation";
export default function Page() {
  return (
    redirect('/auth')
  );
}