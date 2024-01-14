import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

export default async function Home() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  const user = await getUser();
  const isAuthorized = await isAuthenticated();

  return (
    <div className="bg-white p-8 container">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-blue-700 text-xl font-serif">WELCOME</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            {isAuthorized ? (
              <LoginLink className={cn(buttonVariants(),'font-serif')}>
                My Business
              </LoginLink>
            ) : (
              <LoginLink className={cn(buttonVariants())}>Sign In</LoginLink>
            )}
          </ul>
        </nav>
      </header>
      <main className="flex flex-col lg:flex-row items-center justify-between ">
        <div className="lg:w-1/2 mt-40">
          <h2 className="text-4xl font-bold mb-4">Appointment Booking</h2>
          <p className="mb-6 text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna
          </p>
          <Button>Learn More</Button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <Image
            alt="Appointment illustration"
            className=" mt-10 rounded-full"
            height="400"
            sizes="100vw"
            src="/healthcare.png"
            width="400"
          />
        </div>
      </main>
    </div>
  );
}
