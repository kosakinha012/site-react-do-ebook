import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export function useGetApiData(book) {
    const [bookData, setBookData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true)
            setError(false)
            try {
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`)

                if (response.status === 200) {
                    setBookData(response.data.items);
                } else {
                    setError('Failed to fetch data');
                }
            } catch (error) {
                setError(error.message)
            } finally {
                setLoading(false);
            }
        } if (!book.trim()) {
            book = "Harry Poter"
        }
        fetchData()

    }, [book]);

    return { bookData, loading, error };
}