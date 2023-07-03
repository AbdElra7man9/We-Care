class Features {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    };
    Search() {
        const keyword = this.queryStr.keyword ? {
            $or: [
                {
                    name: {
                        $regex: this.queryStr.keyword,
                        $options: 'i'
                    }
                },
                {
                    username: {
                        $regex: this.queryStr.keyword,
                        $options: 'i'
                    }
                },
                {
                    email: {
                        $regex: this.queryStr.keyword,
                        $options: 'i'
                    }
                }
            ]
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
        if (queryCopy.minFees || queryCopy.maxFees) {
            const minFees = this.queryStr.minFees * 1 || 0 ;
            const maxFees = this.queryStr.maxFees * 1 || 1000000 ;
            queryCopy.fees = {$gte: minFees , $lte: maxFees };
            const removeFees = ['minFees', 'maxFees'];
            removeFees.forEach((key) =>delete queryCopy[key]);
        };
        Object.keys(queryCopy).forEach((key) => {
            if (key.includes('_')) {
                const newKey = key.replace(/_/g, '.');
                queryCopy[newKey] = queryCopy[key];
                delete queryCopy[key];
            }
        });
        const fields = ['specialization','minFees','maxFees','gender','address.governorate','address.city'];
        fields.forEach((key) => {
            if (queryCopy[key] === '') {
                delete queryCopy[key];
            }
        });
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