import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface SearchProps {
    onSearchFocused: () => void;
}

type Ref = HTMLInputElement;

const Search = React.forwardRef<Ref, SearchProps>(
    ({ onSearchFocused }, ref) => (
        <div className="relative ml-[13px]">
            <input
                ref={ref}
                className="input px-[43px] pt-[6px] pb-[7px] peer"
                placeholder="Search"
                onFocus={onSearchFocused}
            />
            <span className="absolute top-1/2 left-0 -translate-y-1/2 translate-x-4 peer-focus:text-primary">
                <FontAwesomeIcon icon={faSearch} />
            </span>
        </div>
    ),
);

Search.displayName = 'Search';

export default Search;
