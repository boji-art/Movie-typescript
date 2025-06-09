import { Film, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className="h-[302px] py-8 px-6 w-full bg-indigo-700 md:flex md:justify-between md:pt-4">
      <div className="text-sm gap-2 flex flex-col text-white md:flex md:flex-col">
        <div className=" flex md:flex md:gap-2 md:pt-4">
          <Film className="w-[16px] h-[16px]" />
          <p className="font-bold">MovieZ</p>
        </div>
        <p className="text-white">© 2024 Movie Z. All Rights Reserved.</p>
      </div>

      <div className="flex items-center gap-6 md:gap-15 md:pb-10">
        <div className="py-5 md:py-10 text-sm md:px-4 md:pt-4">
          <p className="text-white pt-3"> Contact Information</p>
          <div className="flex items-center pt-3  gap-2 md:gap-2 md:pt-4 ">
            <Mail className="text-white w-[16px] h-[16px]" />
            <div className="flex flex-col  text-white ">
              <span>Email:</span>
              <span>support@movieZ.com</span>
            </div>
          </div>
          <div className="flex gap-2 pt-3 items-center md:pt-4">
            <Phone className="text-white w-[16px] h-[16px] " />
            <div className="flex flex-col text-white ">
              <span>Phone:</span>
              <span>+976 (11) 123-4567</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center  text-white text-sm gap-2 pl-13 pt-5 md:pb-25  md:items-start ">
          <a>Follow us </a>
          <div  className=" flex flex-col gap-2 md:flex md:flex-row md:gap-2 ">
            <a>Facebook </a>
            <a>Instagram</a>
            <a>Twitter</a>
            <a>Youtube</a>
            </div>
        </div>
      </div>
    </div>
  );
};
