import Card1 from "../components/Cards/Card1";
import ScrollingHeader from "./ScrollingHeader";

const BentoGrid = () => {
  return (
    <div className="grid grid-cols-12 gap-4">
       
        <div className="col-span-5 row-span-5 p-4">
            <Card1 title="Bookings Planner"
            description="Centralized management of bookings, schedules, and space availability across locations."
            color="bg-[var(--yellow)]"
            />
        </div>

      
        <div className="col-span-2 row-span-5 bg-green-200 p-4">Card 2</div>

     
        <div className="col-span-3 row-span-7 bg-blue-200 p-4">Card 3</div>

        <div className="col-span-2 row-span-5 bg-yellow-200 p-4">Card 4</div>
        </div>

  );
}

export default BentoGrid;