import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, Paragraph, Button, ProgressBar } from 'react-native-paper';

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#EBF5F7',
        margin: 10,
        borderRadius: 20,
        flex: 1,
        width: '50vh',
        overflow: 'hidden',
    },
    content: {
        backgroundColor: '#FAE8E0',
    },
    cover: {
        height: 220,
    },
});

const CardQuote = ({task,background}) => {

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
        <Card style={styles.card}>
            <Card.Cover
                style={styles.cover}
                resizeMode={`cover`}
                source={{ uri: background }} />
            <Card.Content style={styles.content}>             
                <Card.Actions>
                    <Button style={styles.buttons}
                                icon={buttonPlay}
                                color="#541616"
                                labelStyle={{ fontSize: 80}}
                                onPress={handlePlay}
                    />
                </Card.Actions>
                <Paragraph>{task}</Paragraph>                   
            </Card.Content>   
            <View style={{ height: 15, backgroundColor: '#FAE8E0'}}>
                <ProgressBar
                    progress={progressBar}
                    color='#541616'
                    style={{ height: 5}}>
                </ProgressBar>
            </View>                             

        </Card>
    )
}

export default CardQuote;