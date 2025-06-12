import { Film } from "lucide-react";
import Link from "next/link";
import { Genre1 } from "./Genre/Genre1";
import { HeaderSearch } from "./HeaderSearch";
import { ModeToggle } from "./ModeToggle";

export const Header = () => {
  return (
    <div className="h-[59px]  py-3 px-3 max-w-[1280px]">
      <div className="flex items-center gap-2 ">
        <Link href={`/`}>
          <Film className=" text-indigo-700 h-[20px] w-[20px]" />
        </Link>

        <p className=" text-indigo-700 font-bold italic text-lg">Movie Z</p>

        <div className="flex items-center justify-between">
          <Genre1 />
          <div className=" md:flex gap-[12px] ">
            <HeaderSearch />
          </div>

          <div className="flex gap-3   ">
            {/* <Button variant="outline" className="flex gap-3 md:hidden">
         
            <Search />
          </Button> */}
          </div>
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};
