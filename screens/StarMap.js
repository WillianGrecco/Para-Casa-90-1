import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { WebView } from "react-native-webview";

export default class StarMapScreen extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Tela do mapa estelar!</Text>

                <WebView
                    scalePagesToFit={true}
                    source={{ uri: path }}
                    style={{ MarginTop: 20, MarginBottom: 20 }}
                />

                <TextInput
                    style={styles.inputStyle}
                    placeholder="Digite sua Latitude"
                    placeholderTextColor="white"
                    onChangeText={(text) => {
                        this.setState({
                            latitude: text

                        })
                    }}
                ></TextInput>


            </View>

        )
        const { longitude, latitude } = this.state;
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
    }
}