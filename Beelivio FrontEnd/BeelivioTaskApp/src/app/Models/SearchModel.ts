export class SearchModel{
    searchString:string;
    pageIndex:number;
    pageSize:number;
    /**
     *
     */
    constructor( index:number, size:number,search:string,) {
        this.searchString = search;
        this.pageIndex = index;
        this.pageSize = size;
    }
}