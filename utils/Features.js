class Features {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    };
    Search() {
        const keyword = this.queryStr.keyword ? {
            username: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            },
            fullname: {
                $regex: this.queryStr.keyword,
                $options: 'i'
            },
        }
            : {

            }
        this.query = this.query.find({ ...keyword });
        return this;
    }
    Filter() {
        const queryCopy = { ...this.queryStr };
        const removeFields = ['keyword', 'page', 'limit'];
        removeFields.forEach((key) =>
            delete queryCopy[key]
        );
        this.query = this.query.find(queryCopy);
        return this;
    }
    Pagination(resultperpage) {
        const currentPage = Number(this.queryStr.page) || 1;
        const skip = resultperpage * (currentPage - 1);

        this.query = this.query.limit(resultperpage).skip(skip);
        return this;
    }
    Paginate(){
        const page = this.queryStr.page * 1 || 1 ;
        const limit = this.queryStr.limit * 1 || 10 ;
        const skip = (page - 1) * limit;
        
        this.query = this.query.skip(skip).limit(limit);
        
        return this;
    }
}


module.exports = Features