// import { type } from '@testing-library/user-event/dist/type';
// import React from 'react';
import { ChangeEvent } from 'react';
import { StringLiteral } from 'typescript';

import './search-box.styles.css';

// example function typescript
const func: (a: String, b:number, c:boolean) => void = (a,b,c) => {}

//Example Interfaces in Typescript better with object oriented programming style
interface ISearchBoxProps extends IChangeHandlerProps {
  className: string;
  placeholder?: string;

}
// or without extends
// interface ISearchBoxProps {
//   onChangeHandler: (a: string) => void;
// }
interface IChangeHandlerProps {
  onChangeHandler: (a: string) => void;
}

// =============================================================

// Example of type and union better with functional programming style

type CanadianAddress = {
  street: string;
  province: string;
}
type USAddress = {
  street: string;
  state: string;
}
type NorthAmericanAddress = CanadianAddress | USAddress;

const Address: NorthAmericanAddress = {
  street: 'adas',
  province: 'asasd'
}
// =============================================================

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
}: SearchBoxProps) => (
  <input
    className={`search-box ${className}`}
    type='search'
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);

export default SearchBox;
