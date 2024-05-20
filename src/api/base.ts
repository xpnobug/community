// 设置分页
export interface Page {
    pageSize: number;
    currentPage: number;
    count: number;
    maxPage: number;
    minPage: number;
    firstResult: number;
    recount: boolean;
}
