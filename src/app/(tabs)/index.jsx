import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';
import BookList from '../../components/bookList/BookList';
import { BOOKS } from '../../../data';

const BookListScreen = () => {
  const [bookName, setBookName] = useState('');
  const [books, setBooks] = useState(BOOKS);

  const handleChangeInputText = (text) => {
    setBookName(text);
  }

  const handleAddBook = () => {
    setBooks((prevBooks) => {
      const lastId = Math.max(...prevBooks.map(b => b.id));
      return [...prevBooks, { id: lastId + 1, title: bookName}]
    })
    setBookName('')
  }

  const handleDeleteBook = (id) => {
    setBooks((prevBooks) => prevBooks.filter((b) => b.id !== id))
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
         value={bookName}
         onChangeText={handleChangeInputText}
         placeholder='Ingrese el nombre del libro' />
        <Button onPress={handleAddBook} color="green" title='Agregar libro' />
      </View>
      <View style={styles.listContainer}>
        <BookList onDelete={handleDeleteBook} books={books} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
  },
  inputContainer: {
    justifyContent: "center"
  },
  listContainer: {
    flex: 1,
    marginTop: 24,
    marginBottom: 24
  },
  textInput: {
    width: "100%",
    marginRight: 8,
    marginVertical: 16,
    padding: 8,
    borderWidth: 1,
    borderColor: "#CCC"
  },
  buttonInput: {
    width: "50%",
    alignSelf: "flex-end"
  }
});

export default BookListScreen;
