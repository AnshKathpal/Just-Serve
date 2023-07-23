import { Button, Box } from "@chakra-ui/react";
import React from "react";

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <Box>
      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        return (
          <Button
            key={page}
            margin={1}
            disabled={page === currentPage}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </Button>
        );
      })}
    </Box>
  );
};

export default Pagination;
