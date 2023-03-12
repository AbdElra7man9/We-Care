import { useState, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';

const ITEMS_PER_PAGE = 10;
const TOTAL_ITEMS = 200;
const MAX_PAGE_NUMBERS = 5;

function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const navigate = useNavigate()
    const totalPages = Math.ceil(TOTAL_ITEMS / ITEMS_PER_PAGE);
    const [queryParams] = useSearchParams();
    const currentSearchPage = Number(queryParams.get("page"));
    console.log(currentSearchPage)
    useEffect(() => {
        if (currentSearchPage === 0) {
            navigate(`?page=${1}`);
        }
    }, [currentSearchPage, navigate])
    if (currentSearchPage !== currentPage) {
        setCurrentPage(currentSearchPage || 1);
    }

    const getPageNumbers = () => {
        const pageNumbers = [];
        if (totalPages <= MAX_PAGE_NUMBERS) {
            for (let i = 1; i <= totalPages; i++) {
                pageNumbers.push({ key: i, value: i });
            }
        } else {
            const midPoint = Math.floor(MAX_PAGE_NUMBERS / 2);

            if (currentPage <= midPoint) {
                for (let i = 1; i <= MAX_PAGE_NUMBERS - 1; i++) {
                    pageNumbers.push({ key: i, value: i });
                }
                pageNumbers.push({ key: "ellipsis1", value: "..." });
                pageNumbers.push({ key: totalPages, value: totalPages });
            } else if (currentPage > midPoint && currentPage <= totalPages - midPoint) {
                pageNumbers.push({ key: 1, value: 1 });
                pageNumbers.push({ key: "ellipsis2", value: "..." });
                for (let i = currentPage - midPoint; i <= currentPage + midPoint; i++) {
                    pageNumbers.push({ key: i, value: i });
                }
                pageNumbers.push({ key: "ellipsis3", value: "..." });
                pageNumbers.push({ key: totalPages, value: totalPages });
            } else {
                pageNumbers.push({ key: 1, value: 1 });
                pageNumbers.push({ key: "ellipsis4", value: "..." });
                for (let i = totalPages - MAX_PAGE_NUMBERS + 2; i <= totalPages; i++) {
                    pageNumbers.push({ key: i, value: i });
                }
            }
        }

        return pageNumbers;
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // queryParams.set("page", pageNumber);
    };

    const pageNumbers = getPageNumbers();

    return (
        <div className="container max-w-[40rem] flex justify-end">
            <div className="border divide-x-2 w-full flex items-center rounded-lg my-10">
                <Link className="p-3 font-medium">Prev</Link>
                {pageNumbers.map((number) => {
                    if (number.value === "...") {
                        return (
                            <div
                                key={number.key}
                                className='p-3 px-4'>
                                {number.value}
                            </div>
                        )
                    } else {
                        return (
                            <Link
                                key={number.key}
                                to={`?page=${number.value}`}
                                onClick={() => handlePageChange(number.value)}
                                className={`p-3 px-4 ${currentPage === number.value ? "bg-blue-500 text-white" : ""
                                    }`}
                            >
                                {number.value}
                            </Link>
                        )
                    }
                })}
                <Link className="p-3 font-medium ml-auto">Next</Link>
            </div>
        </div>
    );
}

export default Pagination;

