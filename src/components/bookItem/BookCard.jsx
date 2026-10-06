import { StyleSheet } from 'react-native'
import { Card, Chip, IconButton } from 'react-native-paper'

const BookCard = ({ book, onDelete }) => {
    const { title, author, pageCount, rating, available } = book

    return (
        <Card style={styles.card} mode="elevated">
            <Card.Title
                title={title}
                subtitle={author}
                right={(props) => (
                    <IconButton {...props} icon="delete" onPress={() => onDelete(book.id)} />
                )}
            />
            <Card.Content style={styles.content}>
                <Chip icon="book-open-page-variant" style={styles.chip}>{pageCount} páginas</Chip>
                {typeof rating === 'number' && (
                    <Chip icon="star" style={styles.chip}>{rating}/5</Chip>
                )}
                <Chip
                    icon={available ? 'check-circle' : 'close-circle'}
                    style={styles.chip}
                >
                    {available ? 'Disponible' : 'No disponible'}
                </Chip>
            </Card.Content>
        </Card>
    )
}

export default BookCard

const styles = StyleSheet.create({
    card: {
        marginHorizontal: 12,
        marginVertical: 6
    },
    content: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
        paddingBottom: 12
    },
    chip: {
        marginRight: 4
    }
})
