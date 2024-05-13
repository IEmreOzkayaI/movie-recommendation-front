import {Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious} from "@/components/ui/pagination";

const Pagination_ = ({current, next, previous}) => {
	return (
		<Pagination className='my-10'>
			<PaginationContent>
				{current === 1 && (
					<PaginationItem>
						<PaginationPrevious disabled />
					</PaginationItem>
				)}
				{current !== 1 && (
					<PaginationItem>
						<PaginationPrevious onClick={() => previous(current - 1)} />
					</PaginationItem>
				)}
				{current !== 1 && (
					<PaginationItem>
						<PaginationLink onClick={() => previous(current - 1)}>{current - 1}</PaginationLink>
					</PaginationItem>
				)}
				<PaginationItem>
					<PaginationLink isActive>{current}</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink onClick={() => next(current + 1)}> {current + 1}</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext onClick={() => next(current + 1)} />
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	);
};

export default Pagination_;
