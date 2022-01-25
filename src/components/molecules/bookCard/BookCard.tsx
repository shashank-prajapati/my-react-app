import React from 'react';
import Card from '@mui/material/Card';
import BookImage from '../../atoms/bookImage/BookImage';
import BookDetails from '../bookDetails/BookDetails';
import Box from '@mui/material/Box';

type Props = {
    coverImage:string;
    bookTitle:string;
    bookAuthor:string;
    time:string;
};

function BookCard(props: Props) {
    const{coverImage,bookTitle,bookAuthor,time} = props;
  return <div>
      <Card sx={{
          maxWidth:'284px',
          backgroundColor:'formBg.main',
          borderRadius:'8px',
          pb:4
      }}>
          <BookImage source={coverImage}/>
          <BookDetails bookTitle={bookTitle} bookAuthor={bookAuthor} time={time}/>
      </Card>
  </div>;
}

export default BookCard;
