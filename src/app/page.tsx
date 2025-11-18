import { Metadata } from "next";
import { MainContent } from "@/components/MainContent";

export const metadata: Metadata = {
  title: `Malik Aghiles Tahir | Frontend Engineer`,
  description: "Frontend Engineer with a deep-rooted entrepreneurial mindset, specializing in JavaScript, TypeScript, React, and Next.js",
};

export default function Page() {
  return ( 
    <MainContent />
  );
}
