import { Metadata } from "next";
import { RESUME_DATA } from "@/data/resume-data";
import { MainContent } from "@/components/MainContent";
import { usePathname } from "next/navigation";

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary,
};

export default function Page() {
  return ( 
    <MainContent />
  );
}
