import { WebView } from 'react-native-webview';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';

const getHtml = (uri: string) => `
<html style='color:red width: 100%; height:100%; margin: 0; overflow: hidden'>
<body style='color:red width: 100%; height:100%; margin: 0; overflow: hidden'>
<iframe 
width="100%" 
height="100%" 
src="${uri}" 
</iframe>
</body>
</html>
`

export default function GameScreen(props: any) {
    const uri = props.navigation.getParam('uri', 'http://jojoee.github.io/phaser-examples/games/endless-scale/');
    return (
        <View style={{ flex: 1 }}>
            <SafeAreaView>
            </SafeAreaView>
            <TouchableOpacity
                onPress={() => props.navigation.goBack()}
                style={styles.button}
            >
                <Text style={styles.text}> {`Go Back`} </Text>
            </TouchableOpacity>
            <WebView
                style={{ flex: 1 }}
                originWhitelist={['*']}
                source={{ html: getHtml(uri) }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 50,
        position: "absolute",
        zIndex: 100,
        top: 40,
    },
    text: {
        color: 'red',
        fontSize: 20,
        marginLeft: 10,
    }
});