import Link from "next/link";
import s from './Pagination.module.scss';

const Pagination = ({ currentPage, totalPages }) => {
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;
    const prevPage = `/catalog?page=${currentPage - 1}`;
    const nextPage = `/catalog?page=${currentPage + 1}`;

    if (totalPages === 1) return null;

    return (
        <div className={s.pagination}>
            {!isFirstPage && <Link href={prevPage}>
                <img src="/svg/arrow-left.svg" alt="prev" />
            </Link>}
            {Array.from({ length: totalPages }, (_, i) => {
                const page = i + 1;
                const isActive = currentPage === page;

                return (
                    <Link
                        className={isActive ? "active" : ""}
                        href={`/catalog?page=${page}`}
                        key={i}
                    >
                        {page}
                    </Link>
                );
            })}
            {!isLastPage && <Link href={nextPage}>
                <img src="/svg/arrow-right.svg" alt="next" />    
            </Link>}
        </div>
    );
};

export default Pagination;
