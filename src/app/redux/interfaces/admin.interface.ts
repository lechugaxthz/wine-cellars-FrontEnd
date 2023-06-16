export interface Admin {
    page: {
        page: number,
        perPage: number,
        totalPages: number,
    };
    allWines: object[];
    allWineCellars: object[];
}