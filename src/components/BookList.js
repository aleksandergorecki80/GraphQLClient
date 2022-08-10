import React from 'react'
import { useQuery } from '@apollo/client';
import { getBooksQuery } from '../queries/queries'
import Book from './Book';


const BookList = () => {
    const { loading, error, data } = useQuery(getBooksQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data)
  console.log(loading)

    return (
        <div>
            <ul>
                <li>Book name</li>
                <Book />
            </ul>
        </div>
    )
}

export default BookList;