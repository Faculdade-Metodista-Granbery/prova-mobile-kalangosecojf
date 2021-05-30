import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph, Button, ProgressBar, ThemeProvider } from 'react-native-paper';
import { themeKalango,themeOriginal} from '../../utils/colors';

const styles = StyleSheet.create({
    card: {
        //backgroundColor: nameTheme ? themeKalango.backgraundCard : themeOriginal.backgraundCard,
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        //backgroundColor: nameTheme ? themeKalango.backgraundCard : themeOriginal.backgraundCard,
    },
    cover: {
        height: 220,
    },
});

const CardQuote = ({task,background}) => {
    //Theme Original
    //const [nameTheme, setNameTheme] = useState(null);
    //Theme Kalango
    const [nameTheme, setNameTheme] = useState("kalango");
    
    const [buttonPlay, setButtonPlay] = useState("play");
    const [progressBar, setProgressBar] = useState(null);
    

    const handlePlay = () => {
        setButtonPlay("play")
        setProgressBar(0)

        if(buttonPlay === "play"){
            setButtonPlay("pause")
            setProgressBar(1)
        }
    }

    return (
        <Card style={styles.card}
            backgroundColor={nameTheme ? themeKalango.backgraundCard : themeOriginal.backgraundCard}
        >
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: background }} />
            <Card.Content style={styles.content}
                backgroundColor={nameTheme ? themeKalango.button : themeOriginal.button}
            >             
                <Card.Actions>
                    <Button style={styles.buttons}
                                icon={buttonPlay}
                                color={nameTheme ? themeKalango.button : themeOriginal.button}
                                labelStyle={{ fontSize: 80}}
                                onPress={handlePlay}
                    />
                </Card.Actions>
                <Paragraph>{task}</Paragraph>                   
            </Card.Content>   
            <View style={{ height: 15, backgroundColor: nameTheme ? themeKalango.backgroundCard : themeOriginal.backgroundCard}}>
                <ProgressBar
                    progress={progressBar}
                    color={nameTheme ? themeKalango.progressBar : themeOriginal.progressBar} 
                    style={{ height: 5}}>
                </ProgressBar>
            </View>                             
        </Card>
    )
}

export default CardQuote;