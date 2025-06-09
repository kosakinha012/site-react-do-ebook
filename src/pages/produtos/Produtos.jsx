import React, { useEffect, useState } from 'react';
import { useGetApiData } from '../../hooks/getApiData.jsx';
import Popup from "../../components/popup/Popup.jsx";
import EbookCard from "../../components/cards/EbookCard.jsx";
import { styled } from '@mui/material/styles';
import './Produtos.css';

const Container = styled('div')({
  padding: '2rem',
  backgroundColor: '#121212',
  minHeight: '100vh',
  color: '#FFFFFF'
});

const SearchContainer = styled('div')({
  display: 'flex',
  gap: '1rem',
  marginBottom: '2rem',
  maxWidth: '800px',
  margin: '0 auto 2rem'
});

const SearchInput = styled('input')({
  flex: 1,
  padding: '12px 20px',
  borderRadius: '8px',
  border: '1px solid #00BFFF',
  backgroundColor: '#0A0A0A',
  color: '#FFFFFF',
  fontSize: '1rem',
  outline: 'none',
  transition: 'all 0.3s ease',
  '&:focus': {
    borderColor: '#FFFFFF',
    boxShadow: '0 0 0 2px rgba(0, 191, 255, 0.3)'
  },
  '&::placeholder': {
    color: '#888'
  }
});

const SearchButton = styled('button')({
  padding: '12px 24px',
  backgroundColor: '#00BFFF',
  color: '#000000',
  border: 'none',
  borderRadius: '8px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#0080FF',
    transform: 'translateY(-2px)'
  },
  '&:active': {
    transform: 'translateY(0)'
  }
});

const LoadingText = styled('p')({
  textAlign: 'center',
  color: '#00BFFF',
  fontSize: '1.2rem'
});

const ErrorText = styled('p')({
  textAlign: 'center',
  color: '#FF3D3D',
  fontSize: '1.2rem'
});

const CardsContainer = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '2rem',
  padding: '1rem',
  maxWidth: '1400px',
  margin: '0 auto'
});

const NoResultsText = styled('div')({
  textAlign: 'center',
  color: '#888',
  fontSize: '1.2rem',
  marginTop: '2rem'
});

function Produtos() {
  const [bookName, setBookName] = useState('');
  const [bookDigitado, setBookDigitado] = useState('');
  const { bookData, loading, error } = useGetApiData(bookName);
  const [popupContent, setPopupContent] = useState({ message: '', color: '' });
  const [showPopup, setShowPopup] = useState(false);

  function showAndHidePopup(message, color) {
    setPopupContent({ message, color });
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3500);
  }

  useEffect(() => {
    if (!loading) {
      if (error) {
        showAndHidePopup(`Error: ${error}`, 'error');
      } else if (bookData) {
        showAndHidePopup('Ebook encontrado!', 'success');
      }
    }
  }, [loading, error, bookData]);

  const handleInputChange = (e) => {
    setBookDigitado(e.target.value);
  };

  function BuscarLivro() {
    setBookName(bookDigitado);
  }

  return (
    <Container>
      <SearchContainer>
        <SearchInput
          type="text"
          placeholder="Nome do Livro"
          value={bookDigitado}
          onChange={handleInputChange}
        />
        <SearchButton onClick={BuscarLivro}>Buscar Ebooks</SearchButton>
      </SearchContainer>

      {loading && <LoadingText>Carregando...</LoadingText>}

      {error && <ErrorText>Erro ao buscar livro</ErrorText>}

      {Array.isArray(bookData) ? (
        <CardsContainer>
          {bookData.map((a) => (
            <EbookCard key={a.id} {...a} />
          ))}
        </CardsContainer>
      ) : (
        bookData && <NoResultsText>Nenhum livro encontrado</NoResultsText>
      )}

      {showPopup && (
        <Popup
          message={popupContent.message}
          color={popupContent.color}
        />
      )}
    </Container>
  );
}

export default Produtos;