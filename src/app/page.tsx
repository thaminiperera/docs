import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      Click <Link href="http://localhost:3000/documents/123">Here</Link> 
    </div>
  );
}
