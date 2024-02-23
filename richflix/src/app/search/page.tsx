import React, { useState } from 'react'
import query from './query';

export default function search() {

  const [searchWords,setSearchWords] = useState('');
  const [searchType, setSearchType] = useState('keyword');
  const [searchResults, setSearchResults] = useState<QueryData | null>(null);

  const submitSearch = async () => {
    const results = await query(searchWords, searchType);
    setSearchResults(results);
  }

  return (
    
    // search logic

    // handleSubmit
    

    <div>
        <form action="submitSearch">
          <input type="text" />
          <button type="submit">Search</button>
          {/* suspense field / display results */}
        </form>
    </div>
  )
}
