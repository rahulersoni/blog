import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import TextInput from '../fields/TextInput';

const SearchTop = () => {
    const [searchValue, setSearchValue] = useState("");
    const navigate = useNavigate();

    const onChangeHandler = (e) => {
        setSearchValue(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        navigate('/search?s=' + encodeURIComponent(searchValue));
    }

    return (
        <div className='search search-container flex-1 w-full'>
            <div className='search-outer'>
                <form className='search-form relative' onSubmit={submitHandler}>
                    <div>

                        <TextInput name={'s'} value={searchValue} placeholder="Search..." curved="true" action={onChangeHandler} />

                        <button type="submit" className="absolute right-4 top-2 h-6 w-6 text-gray-400 dark:text-slate-100 cursor-pointer">
                            <FiSearch />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default SearchTop;
