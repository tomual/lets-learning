import React from 'react';
import { Drawer, Avatar } from 'react-native-material-ui';
import { View } from "react-native";
function App() {
  return (
    <View>
      <Drawer>
        <Drawer.Header >
            <Drawer.Header.Account
                avatar={<Avatar text="A" />}
                accounts={[
                    { avatar: <Avatar text="B" /> },
                    { avatar: <Avatar text="C" /> },
                ]}
                footer={{
                    dense: true,
                    centerElement: {
                        primaryText: 'Reservio',
                        secondaryText: 'business@email.com',
                    },
                    rightElement: 'arrow-drop-down',
                }}
            />
        </Drawer.Header>
        <Drawer.Section
            divider
            items={[
                { icon: 'bookmark-border', value: 'Notifications' },
                { icon: 'today', value: 'Calendar', active: true },
                { icon: 'people', value: 'Clients' },
            ]}
        />
        <Drawer.Section
            title="Personal"
            items={[
                { icon: 'info', value: 'Info' },
                { icon: 'settings', value: 'Settings' },
            ]}
        />
      </Drawer>
    </View>
  );
}

export default App;

// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
