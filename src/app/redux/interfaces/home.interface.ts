export default interface Home {
    page: {
        page: number,
        perPage: number,
        totalPages: number,
    };
    winesOrWineCellars: object[];
}