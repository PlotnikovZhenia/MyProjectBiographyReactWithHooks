import React,{useState} from 'react';

const SearchPanel = ({visibleSearch}) => {
  const [searchText,setSearchText]=useState('');
  const onTextSearch=(event)=>{
      setSearchText(event.target.value)
  }
  return (
    <>
    <input type="text"onChange={onTextSearch} placeholder="поиск" />
    <button onClick={()=>visibleSearch(searchText)}>Найти</button>
    </>
  );
};

export default SearchPanel;