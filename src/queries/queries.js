import {  gql } from '@apollo/client';

export const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`; 

export const getAutorsQuery = gql`
{
    authors {
        name
        id
    }
}
`;

export const getBookQuery = gql`
    query GetBook($id: ID){
        book(id: $id) {
            id
            name
            genre
            author {
                id
                name
                age
                books {
                    name
                    id
                }
            }
        }
    }
`;