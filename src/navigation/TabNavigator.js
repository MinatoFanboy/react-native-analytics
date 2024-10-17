import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useDrawerProgress } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated';

import { Analytics, Home } from '~/screens';
import { Icon } from '~/components';
import { COLORS, SIZES } from '~/constants';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    const insets = useSafeAreaInsets();
    const progress = useDrawerProgress();

    const animatedStyle = useAnimatedStyle(() => {
        const scale = interpolate(progress.value, [0, 1], [1, 0.8]);

        const borderRadius = interpolate(progress.value, [0, 1], [0, 24]);

        return {
            borderRadius,
            transform: [{ scale }],
        };
    }, []);

    const animatedWraooerStyle = useAnimatedStyle(() => {
        const scaleY = interpolate(progress.value, [0, 1], [1, 0.7]);

        const scaleX = interpolate(progress.value, [0, 1], [1, 0.85]);

        const borderRadius = interpolate(progress.value, [0, 1], [0, 24]);

        return {
            borderRadius,
            transform: [{ scaleY }, { scaleX }],
        };
    }, []);

    const getTabIcon = useCallback((name, focused) => {
        return (
            <Icon
                color={focused ? COLORS.primary : '#9EA1AE'}
                name={focused ? `${name}` : `${name}-outline`}
                size={24}
                type={'custom'}
            />
        );
    }, []);

    const getTabMainIcon = useCallback(() => {
        return (
            <View
                style={{
                    alignItems: 'center',
                    borderRadius: 54,
                    justifyContent: 'center',
                    height: 54,
                    width: 54,
                    backgroundColor: COLORS.primary,
                }}
            >
                <Icon color={'white'} name={'scan-outline'} size={24} type={'custom'} />
            </View>
        );
    }, []);

    return (
        <>
            <Animated.View
                style={[
                    {
                        backgroundColor: '#FFF2F2',
                        bottom: 0,
                        left: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                    },
                    animatedWraooerStyle,
                ]}
            />
            <Animated.View
                style={[
                    { backgroundColor: 'white', borderColor: '#FFD7D7', borderWith: 1, flex: 1, overflow: 'hidden' },
                    animatedStyle,
                ]}
            >
                <Tab.Navigator
                    screenOptions={{
                        headerShown: false,
                        tabBarShowLabel: false,
                        tabBarStyle: {
                            borderTopLeftRadius: SIZES.border,
                            borderTopRightRadius: SIZES.border,
                            borderTopWidth: 0,
                            elevation: 0,
                            height: insets.bottom + 64,
                            overflow: 'hidden',
                        },
                    }}
                >
                    <Tab.Screen
                        name={'Home'}
                        component={Home}
                        options={{ tabBarIcon: ({ focused }) => getTabIcon('home', focused) }}
                    />
                    <Tab.Screen
                        name={'Analytics'}
                        component={Analytics}
                        options={{ tabBarIcon: ({ focused }) => getTabIcon('graph', focused) }}
                    />
                    <Tab.Screen name={'Scan'} component={Home} options={{ tabBarIcon: () => getTabMainIcon() }} />
                    <Tab.Screen
                        name={'Wallet'}
                        component={Home}
                        options={{ tabBarIcon: ({ focused }) => getTabIcon('wallet', focused) }}
                    />
                    <Tab.Screen
                        name={'User'}
                        component={Home}
                        options={{ tabBarIcon: ({ focused }) => getTabIcon('user', focused) }}
                    />
                </Tab.Navigator>
            </Animated.View>
        </>
    );
};

export default TabNavigator;
