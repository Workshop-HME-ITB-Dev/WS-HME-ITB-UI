const SearchBar = ({ wordSearch, onChange, placeholder }: SearchBarProps): JSX.Element => {
    return (<>
        <div className="flex flex-col mb-5 mt-6 mx-auto">
            <input
                className="w-96 text-lg shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:border-ws-orange focus:ring-ws-orange focus:outline-none focus:shadow-outline"
                id="passwordRetype"
                type="text"
                placeholder={placeholder}
                name="passwordRetype"
                value={wordSearch}
                onChange={(e) => onChange(e)}
            />
        </div>
    </>);
}

interface SearchBarProps {
    wordSearch: string;
    onChange: Function;
    placeholder: string;
}

export default SearchBar;