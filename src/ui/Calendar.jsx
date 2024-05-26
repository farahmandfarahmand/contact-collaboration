import { useRef } from "react";
import {
    HiCalendar,
 
  } from "react-icons/hi";
  // import { format } from "date-fns";

import useOutsideClick from "../features/collaboration/useOutsideClick";

function Calendar() {
    // const [openDate, setOpenDate] = useState(false);
    // const [date, setDate] = useState([
    //     {
    //       startDate: new Date(),
    //       endDate: new Date(),
    //       key: "selection",
    //     },
    //   ]);
      const DateRef = useRef();
      useOutsideClick(DateRef, "optionDate", () => setOpenDate(false));
    return ( 
        <div className="flex content-center  gap-1 items-center relative">
<HiCalendar className=" fill-primary-700 w-[1.5rem] h-[1.5rem] inline-block" />
        {/* <HiCalendar className=" fill-primary-700 w-[1.5rem] h-[1.5rem] inline-block" />
        <div
          id="optionDate"
          onClick={() => setOpenDate(!openDate)}
          className="ml-[0.5rem] text-[0.8rem] "
        >
          {`${format(date[0].startDate, "MM/dd/yyyy")}`}
        </div>
        <div ref={DateRef}>
          {openDate && (
            <DateRange
              onChange={(item) => setDate([item.selection])}
              ranges={date}
              className="date"
              minDate={new Date()}
              moveRangeOnFirstSelection={true}
            />
          )}
        </div>
        <span className="seperator"></span> */}
      </div>
     );
}

export default Calendar;