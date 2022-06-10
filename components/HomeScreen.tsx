import { View, StyleSheet,TouchableOpacity, Text } from 'react-native';

const games = [
    {
        uri: 'http://jojoee.github.io/phaser-examples/games/endless-scale/',
        name: 'Game1',
        backgroundColor: 'powderblue',
        icon: '',
        description: '',
    },
    {
        uri: 'http://jojoee.github.io/phaser-examples/games/fruit-ninja/',
        name: 'Game2',
        backgroundColor: 'red',
        icon: '',
        description: '',

    },
    {
        uri: 'http://jojoee.github.io/phaser-examples/games/space-hipster/',
        name: 'Game3',
        backgroundColor: 'blue',
        icon: '',
        description: '',
    }
]
export default function HomeScreen(props: any) {
    return (
        <View style={styles.container}>
            {games.map((game, index) => (
                <TouchableOpacity onPress={() => props.navigation.navigate('Game', {uri: game.uri})} key={index}>
                <View style={{ ...styles.item, backgroundColor: game.backgroundColor }}>
                    <Text>Click me: {game.name}</Text>
                </View>
                </TouchableOpacity>
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    item: {
        width: 100,
        height: 100,
    }
});