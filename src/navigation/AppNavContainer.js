import React, { useCallback } from 'react';
import { ImageBackground, Platform, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import TabNavigator from './TabNavigator';
import CustomDrawerContent from './drawer/CustomDrawerContent';
import FocusAwareStatusBar from '~/components/FocusAwareStatusBar';
import images from '~/constants/images';
import { COLORS } from '~/constants/theme';

const Drawer = createDrawerNavigator();

const AppNavContainer = () => {
    const DrawerContent = useCallback((props) => {
        return <CustomDrawerContent {...props} />;
    }, []);

    return (
        <NavigationContainer>
            {Platform.OS === 'ios' ? (
                <FocusAwareStatusBar barStyle={'light-content'} />
            ) : (
                <FocusAwareStatusBar backgroundColor={COLORS.primary} barStyle={'light-content'} />
            )}
            <View style={{ flex: 1 }}>
                <ImageBackground source={images.bgTransparent} style={{ flex: 1 }}>
                    <Drawer.Navigator
                        drawerContent={DrawerContent}
                        screenOptions={{
                            drawerStyle: {
                                backgroundColor: 'transparent',
                                flex: 1,
                                width: '60%',
                            },
                            drawerType: 'slide',
                            headerShown: false,
                            overlayColor: 'transparent',
                            sceneContainerStyle: { backgroundColor: 'transparent' },
                        }}
                    >
                        <Drawer.Screen name={'TabNavigator'}>{(props) => <TabNavigator {...props} />}</Drawer.Screen>
                    </Drawer.Navigator>
                </ImageBackground>
            </View>
        </NavigationContainer>
    );
};

export default AppNavContainer;
