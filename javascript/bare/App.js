import React, { Component } from 'react';
import { AppRegistry, Text, TextInput, View, StyleSheet, FlatList, ActivityIndicator, SectionList, Image, Button, Alert, ScrollView, Platform, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

const styles = StyleSheet.create({
    blue: {
        color: 'blue',
        fontWeight: 'bold', 
        fontSize: 30
    },
    red: {
        color: 'red'
    }
})

class HelloWorldApp extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, World!</Text>
            </View>
        );
    }
}

class Bananas extends Component {
    render() {
        let pic = {uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'};
        return (
            <Image source={pic} style={{width: 193, height: 110}}/>
        );
    }
}

class Greeting extends Component {
    render() {
        return (
            <View style={{alignItems: 'center'}}>
                <Text>Hello {this.props.name}!</Text>
            </View> 
        );
    }
}

class LotsOfGreetings extends Component {
    render() {
        return (
            <View style={{alignItems: 'center', top: 50}}>
                <Greeting name="Rune" />
                <Greeting name="Tom" />
                <Greeting name="Jason" />
            </View>
        );
    }
}

class Blink extends Component {
    componentDidMount() {
        setInterval(() => (
            this.setState(previousState => (
                { isShowingText: !previousState.isShowingText }
            ))
        ), 1000);
    }

    state = { isShowingText: true };

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text style={styles.red}>{this.props.text}</Text>
        );
    }
}

class BlinkApp extends Component {
    render() {
        return (
            <View style={{top: 50}}>
                <Blink text="Hello" />
            </View>
        );
    }
}

class FixedDimensionBasics extends Component {
    render() {
        return (
            <View>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class FlexDimensionBasics extends Component {
    render() {
        return (
            <View style={{height: 1000}}>
                <View style={{flex:1, backgroundColor: 'powderblue'}} />
                <View style={{flex:2, backgroundColor: 'skyblue'}} />
                <View style={{flex:3, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class FlexRow extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'row', 
            }}>
                <View style={{flex: 1, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class JustifyContent extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column', 
                justifyContent: 'space-between', 
            }}>
                <View style={{flex: 0.5, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class AlignItems extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column', 
                justifyContent: 'center', 
                alignItems: 'stretch', 
            }}>
                <View style={{flex: 0.5, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: '50%', height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}

class PizzaTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text: ''};
    }

    changey = function(text) {
        var placey = text.toString().split(' ').map((word) => word && '🍕').join(' ');
        this.setState({text: placey});
    }

    render() {
        return(
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Tupe here"
                    onChangeText={(text) => this.changey(text)}
                />
                <Text style={{padding: 10}}>
                    {this.state.text}
                </Text>
            </View>
        );
    }
}

class ButtonBasics extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    render() {
        return (
            <View style={buttonStyles.container}>
                <View style={buttonStyles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                    />
                </View>
                <View style={buttonStyles.buttonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                    />
                </View>
                <View style={buttonStyles.alternativeLayoutButtonContainer}>
                    <Button
                        onPress={this._onPressButton}
                        title="This looks great!"
                    />
                    <Button
                        onPress={this._onPressButton}
                        title="OK!"
                        color="#841584"
                    />
                </View>
            </View>
        );
    }
}

const buttonStyles = StyleSheet.create({
    container: {
     flex: 1,
     justifyContent: 'center',
    },
    buttonContainer: {
        margin: 20
    },
    alternativeLayoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});

class Touchables extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }

    _onLongPressButton() {
        Alert.alert('You long-pressed the button!')
    }


    render() {
        return (
            <View style={touchableStyles.container}>
                <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                    <View style={touchableStyles.button}>
                        <Text style={touchableStyles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>
                <TouchableOpacity onPress={this._onPressButton}>
                    <View style={touchableStyles.button}>
                        <Text style={touchableStyles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>
                <TouchableNativeFeedback
                        onPress={this._onPressButton}
                        background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
                    <View style={touchableStyles.button}>
                        <Text style={touchableStyles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableWithoutFeedback
                        onPress={this._onPressButton}
                        >
                    <View style={touchableStyles.button}>
                        <Text style={touchableStyles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>
                <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
                    <View style={touchableStyles.button}>
                        <Text style={touchableStyles.buttonText}>Touchable with Long Press</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}
const touchableStyles = StyleSheet.create({
    container: {
        paddingTop: 60,
        alignItems: 'center'
    },
    button: {
        marginBottom: 30,
        width: 260,
        alignItems: 'center',
        backgroundColor: '#2196F3'
    },
    buttonText: {
        padding: 20,
        color: 'white'
    }
});

class Scrolley extends Component {
    render() {
        return (
            <ScrollView>
                <Text style={{fontSize:96}}>Scroll me plz</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Text style={{fontSize:96}}>If you like</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Text style={{fontSize:96}}>Scrolling down</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Text style={{fontSize:96}}>What's the best</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Text style={{fontSize:96}}>Framework around?</Text>
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Image source={{uri: "https://facebook.github.io/react-native/img/favicon.png", width: 64, height: 64}} />
                <Text style={{fontSize:80}}>React Native</Text>
            </ScrollView>
        );
    }
}

class FlatListBasics extends Component {
    render() {
        return (
            <View style={flatstyle.container}>
                <FlatList data={[
                    {key: 'Tom'},
                    {key: 'Terry'},
                    {key: 'Dota'}
                ]}
                renderItem={({item}) => <Text style={flatstyle.item}>{item.key}</Text>}
                />
            </View>
        );
    }
}

const flatstyle = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44
    }
})

class SectionListBasic extends Component {
    render() {
        return (
            <View>
                <SectionList
                    sections={[
                        {title: 'D', data: ['Devin']},
                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}
                    renderItem={function({item}) {return <Text>{item}</Text>}}
                    renderSectionHeader={function({section}) {return <Text>{section.title}</Text>}}
                    keyExtractor={function(item, index) {return index }}

                    // renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
                    // renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                    // keyExtractor={(item, index) => index}
                />
            </View>
        );
    }
}

class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          dataSource: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => <Text>{item.title}, {item.releaseYear}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
}

export default FetchExample;

// AppRegistry.registerComponent('bare', () => Bananas);