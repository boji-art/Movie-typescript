export const SearchResult = ({ movie, setSearchValue }) => {
  return (
    <div className="absolute z-50 p-3 border rounded-lg top-12 bg-background">
      {movie &&
        movie?.results
          ?.slice(0, 5)
          .map((movie) => (
            <SearchResultCart movie={movie} setSearchValue={setSearchValue} />
          ))}
           <div>
        <p>See all results for </p>
      </div>
    </div>
  );
};
