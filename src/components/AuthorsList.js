import React from 'react'
import { useQuery } from '@apollo/client';
import { getAutorsQuery } from '../queries/queries'


const AuthorList = () => {
    const { loading, error, data } = useQuery(getAutorsQuery);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data)
  console.log(loading)

    return (
        <div>
            <ul>
                <li>Authors</li>
            </ul>
        </div>
    )
}

export default AuthorList;