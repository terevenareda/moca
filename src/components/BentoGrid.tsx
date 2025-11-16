import Card1 from "../components/Cards/Card1";
import Card10 from "./Cards/Card10";
import Card11 from "./Cards/Card11";
import Card2 from "./Cards/Card2";
import Card3 from "./Cards/Card3";
import Card4 from "./Cards/Card4";
import Card5 from "./Cards/Card5";
import Card6 from "./Cards/Card6";
import Card7 from "./Cards/Card7";
import Card8 from "./Cards/Card8";
import Card9 from "./Cards/Card9";
import ScrollingHeader from "./ScrollingHeader";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
       
      <Card1 title="1"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--yellow)]"
        />
        <Card2 title="2"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--green)]"/>
        <Card3 title="3"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--purple)]"/>

        <Card4 title="4"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--energy-green)]"/>

        <Card5 title="5"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--skin-pink)]"/>
        <Card6 title="6"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--purple)]"/>
        <Card7 title="7"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--purple)]"/>

        <Card8 title="8"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--yellow)]"/>
        <Card9 title="9"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--energy-green)]"/>
        <Card10 title="10"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--green)]"/>
        <Card11 title="11"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--skin-pink)]"/>
    
    </div>

  );
}

export default BentoGrid;