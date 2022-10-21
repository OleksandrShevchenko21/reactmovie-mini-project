const useGenre = (activeGenre) => {
    if (activeGenre.length < 1) return "";

    const GenreIds = activeGenre().map((g) => g.id);
    return GenreIds.reduce((acc, curr) => acc + "," + curr);
};

export default useGenre;