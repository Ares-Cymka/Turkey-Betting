import type { Metadata } from "next";
import { LoginForm } from "@/components/login-form";
import { MobileBottomNav, TopHeader } from "@/components/platform-ui";

export const metadata: Metadata = {
  title: "Sign in | Turkey Betting Platform",
  description: "Member sign-in",
};

export default function LoginPage() {
  return (
    <div className="page-doodles flex min-h-screen flex-col pb-20 md:pb-0">
      <TopHeader />
      <main className="container-shell flex flex-1 flex-col items-center justify-center py-8 md:py-14">
        <LoginForm />
      </main>
      <MobileBottomNav />
    </div>
  );
}
