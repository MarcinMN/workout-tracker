import { IconButton } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchButton = () => {
  return (
    <IconButton
      variant="ghost"
      aria-label="Search Excercises"
      icon={<BsSearch />}
    />
  );
};

export default SearchButton;
