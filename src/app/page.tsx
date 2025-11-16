import { Scroll } from "lucide-react";
import Image from "next/image";
import ScrollingHeader from "../components/ScrollingHeader";
import BentoGrid from "@/components/BentoGrid";

const Page=() => {
  return (
    <div className="">
      <ScrollingHeader />
      <BentoGrid/>
    </div>
  );
}

export default Page;