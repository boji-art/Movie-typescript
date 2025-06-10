

export const Writer = ({ writerId }:{writerId:}) => {
  const directorList = writerId?.crew?.filter(
    (person) => person.department === "Directing"
  );
  const writerList = writerId?.crew?.filter(
    (person) => person.department === "Writing"
  );


  console.log("directorList", directorList);
  console.log("aaaagwgagagaga", writerId);

  return (
    <div className="flex flex-col">
      <div
        className=" flex 
        flex-row font-base h-[28px] gap-15 ml-5 py-10"
      >
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
        {writerId?.cast?.slice(0, 3).map((cast, index) => (
          <p key={index}>{cast.name}</p>
        ))}
      </div>
    </div>
  );
};
