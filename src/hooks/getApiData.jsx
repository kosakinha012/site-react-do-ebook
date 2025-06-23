import axios from 'axios';
import React, { useEffect, useState } from 'react';

export function useGetApiData(book) {
    const [bookData, setBookData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            setError(false);

            try {
                const query = book.trim() ? book : "Harry Potter"; // corrigido nome e lógica
                const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`);

                if (response.status === 200) {
                    // Adiciona um valor fictício a cada livro
                    const booksWithValue = response.data.items.map(item => ({
                        ...item,
                        valor: (Math.random() * 100).toFixed(2) // valor aleatório entre 0 e 100
                    }));

                    setBookData(booksWithValue);
                } else {
                    setError('Falha ao buscar os dados');
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [book]);

    return { bookData, loading, error };
}
