import { useState } from 'react';

const useAutoCompleteSelectionWithApiCall = (
    api = 'http://test.com',
    preSelectedOptions = {},
) => {
    const [inputValue, setInputValue] = useState('');
    const [selectedOptions, setSelectedOptions] = useState(preSelectedOptions);
    const [options, setOptions] = useState([]);

    const fetchOptions = async () => {
        try {
            console.log(api);
            // Make the API call to fetch options based on the inputValue
            // const response = await fetch(`${api}?q=${inputValue}`);
            // const data = await response.json();
            const data = [
                {
                    id: 1,
                    name: 'John Doe',
                    avatar: 'https://example.com/avatar1.png',
                },
                {
                    id: 2,
                    name: 'Jane Smith',
                    avatar: 'https://example.com/avatar2.png',
                },
                {
                    id: 3,
                    name: 'Alice Johnson',
                    avatar: 'https://example.com/avatar3.png',
                },
            ];
            setOptions(data);
        } catch (error) {
            console.error('Error fetching options:', error);
        }
    };

    const handleInputChange = (event, value) => {
        setInputValue(value);
        fetchOptions();
    };

    const handleOptionAdd = (event, value) => {
        if (!value) {
            return;
        }
        setSelectedOptions((prev) => {
            return {
                ...prev,
                [value.id]: value,
            };
        });
    };
    const handleOptionRemove = (id) => {
        setSelectedOptions((prev) => {
            const updatedOptions = { ...prev };
            delete updatedOptions[id];
            return updatedOptions;
        });
    };

    return {
        inputValue,
        selectedOptions,
        options,
        handleOptionRemove,
        handleInputChange,
        handleOptionAdd,
    };
};
export default useAutoCompleteSelectionWithApiCall;
