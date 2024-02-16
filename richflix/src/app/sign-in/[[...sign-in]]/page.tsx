import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return (
    <div className="flex flex-center justify-center">
      <SignIn />
    </div> 
)}