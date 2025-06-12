import { CreditsType } from "@/types";

export const Credits = ({ credits }: { credits: CreditsType }) => {
  const directorList = credits?.crew?.filter(
    (person) => person.known_for_department === "Directing"
  );
  const writerList = credits?.crew?.filter(
    (person) => person.known_for_department === "Writing"
  );

  return (
    <div className="flex flex-col">
      <div className=" flex flex-row font-base h-[28px] gap-15 ml-5 py-10">
        <span className="font-bold ">Director</span>
        {directorList?.slice(0, 3).map((director, index) => (
          <p key={index}>{director.name}</p>
        ))}
      </div>
      <div className=" flex font-base h-[28px] gap-15 ">
        <span className="font-bold ">Writers</span>
        {writerList?.slice(0, 3).map((writer, index) => (
          <p key={index}>{writer.name}</p>
        ))}
      </div>
      <div className=" flex font-base h-[28px] gap-15 ">
        <span className="font-bold">Stars</span>
        {credits?.cast?.slice(0, 3).map((cast, index) => (
          <p key={index}>{cast.name}</p>
        ))}
      </div>
    </div>
  );
};
