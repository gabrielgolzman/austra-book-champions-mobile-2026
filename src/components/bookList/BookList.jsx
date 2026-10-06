import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import BookCard from '../bookItem/BookCard'

const BookList = ({ books, onDelete }) => {
    return (
        <View style={styles.container}>
            <FlatList
                renderItem={(itemData) =>
                    <BookCard onDelete={onDelete} book={itemData.item} />}
                keyExtractor={(item) => item.id}
                data={books}
            />
            {/* <ScrollView style={styles.listContainer} contentContainerStyle={styles.listContent}>
                {books.map(b => <BookCard onDelete={onDelete} book={b} key={b.id} />)}
            </ScrollView> */}
        </View>
    )
}

export default BookList

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    listContainer: {
        flex: 1
    },
    listContent: {
        paddingBottom: 24
    }
})