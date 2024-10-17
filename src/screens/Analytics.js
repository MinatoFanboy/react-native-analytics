import React from 'react';
import { Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { VictoryLabel, VictoryPie } from 'victory-native';
import { Svg } from 'react-native-svg';

import { Icon } from '~/components';
import { MoneySuccess } from '~/constants/icons';
import { COLORS, FONTS, SIZES } from '~/constants/theme';
import GlobalStyles from '~/styles';

const CardRow = ({ date, money, name }) => (
    <View style={{ alignItems: 'center', flexDirection: 'row', gap: SIZES.base }}>
        <View
            style={{
                alignItems: 'center',
                backgroundColor: COLORS.card,
                borderRadius: 46,
                justifyContent: 'center',
                height: 46,
                width: 46,
            }}
        >
            <MoneySuccess height={22} />
        </View>
        <View style={{ flex: 1 }}>
            <Text style={[FONTS.h3, { color: COLORS.text }]}>{name}</Text>
            <Text style={[FONTS.body2, { color: '#9EA1AE' }]}>{date}</Text>
        </View>
        <Text style={[FONTS.h3, { color: COLORS.text }]}>{`+ $${money}`}</Text>
    </View>
);

const Analytics = () => {
    const colorState = useSharedValue(false);

    const colorAnimated = useAnimatedStyle(
        () => ({
            color: colorState.value ? COLORS.textPrimary : COLORS.text,
        }),
        [],
    );

    const colorAnimated1 = useAnimatedStyle(
        () => ({
            color: colorState.value ? COLORS.text : COLORS.textPrimary,
        }),
        [],
    );

    const leftAnimated = useAnimatedStyle(
        () => ({
            left: colorState.value ? (SIZES.width - 72) / 2 : 0,
        }),
        [],
    );

    const _renderHeader = () => (
        <View
            style={{
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: SIZES.base,
                marginTop: Platform.OS === 'ios' ? 60 : 40,
                paddingHorizontal: SIZES.padding,
            }}
        >
            {/* Category */}
            <Text
                style={[
                    FONTS.h1,
                    {
                        color: 'white',
                    },
                ]}
            >
                Analytics
            </Text>

            {/* Notification */}
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 44,
                    justifyContent: 'center',
                    height: 44,
                    width: 44,
                }}
            >
                <Icon color={COLORS.text} name={'notification-outline'} size={24} type={'custom'} />
                <View
                    style={{
                        borderRadius: 8,
                        height: 8,
                        width: 8,
                        backgroundColor: COLORS.primary,
                        top: SIZES.base,
                        right: 14,
                        position: 'absolute',
                    }}
                />
            </TouchableOpacity>
        </View>
    );

    const _renderChart = () => (
        <View style={GlobalStyles.wrapper}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text
                    style={[
                        FONTS.h2,
                        {
                            color: COLORS.text,
                            flex: 1,
                        },
                    ]}
                >
                    April Usage
                </Text>
                <TouchableOpacity
                    activeOpacity={0.7}
                    style={{ alignItems: 'center', flexDirection: 'row', gap: SIZES.base }}
                >
                    <Text
                        style={[
                            FONTS.body1,
                            {
                                color: COLORS.textPrimary,
                            },
                        ]}
                    >
                        Monthly
                    </Text>

                    <Icon color={COLORS.textPrimary} name={'arrow-down-outline'} size={16} type={'custom'} />
                </TouchableOpacity>
            </View>

            <View style={{ alignItems: 'center', height: 300, marginTop: -40 }}>
                <Svg width={300} height={300}>
                    <VictoryPie
                        colorScale={[COLORS.primary, COLORS.textPrimary]}
                        data={[
                            { x: 1, y: 1 },
                            { x: 1, y: 1 },
                        ]}
                        endAngle={495}
                        height={300}
                        innerRadius={80}
                        labels={() => null}
                        standalone={false}
                        startAngle={135}
                        width={300}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        verticalAnchor="middle"
                        style={[
                            {
                                fontFamily: 'SpaceGrotesk-Regular',
                                fontSize: 12,
                                fill: COLORS.textPrimary,
                                lineHeight: 22,
                            },
                            {
                                fontFamily: 'SpaceGrotesk-Medium',
                                fontSize: 28,
                                fill: COLORS.text,
                                lineHeight: 36,
                            },
                        ]}
                        x={300 * 0.5}
                        y={300 * 0.5}
                        text={['Total Balance', '$821.00']}
                    />
                </Svg>
            </View>

            <View
                style={{
                    alignItems: 'center',
                    backgroundColor: COLORS.primary,
                    borderRadius: 54,
                    flexDirection: 'row',
                    height: 54,
                    padding: 4,
                }}
            >
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => (colorState.value = false)}
                    style={{ borderRadius: 46, flex: 1, justifyContent: 'center', height: '100%' }}
                >
                    <Animated.View
                        style={[
                            {
                                position: 'absolute',
                                top: 0,
                                height: 46,
                                width: (SIZES.width - 72) / 2,
                                backgroundColor: 'white',
                                borderRadius: 36,
                            },
                            leftAnimated,
                        ]}
                    />
                    <Animated.Text
                        style={[
                            FONTS.h3,
                            {
                                textAlign: 'center',
                            },
                            colorAnimated,
                        ]}
                    >
                        Income
                    </Animated.Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => (colorState.value = true)}
                    style={{ borderRadius: 46, flex: 1, justifyContent: 'center', height: '100%' }}
                >
                    <Animated.Text
                        style={[
                            FONTS.h3,
                            {
                                textAlign: 'center',
                            },
                            colorAnimated1,
                        ]}
                    >
                        Income
                    </Animated.Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    const _renderCard = () => (
        <View style={GlobalStyles.wrapper}>
            <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text
                    style={[
                        FONTS.h2,
                        {
                            color: COLORS.text,
                            flex: 1,
                        },
                    ]}
                >
                    Recent Transaction
                </Text>
                <TouchableOpacity activeOpacity={0.7}>
                    <Text
                        style={[
                            FONTS.title1,
                            {
                                color: COLORS.textPrimary,
                            },
                        ]}
                    >
                        See all
                    </Text>
                </TouchableOpacity>
            </View>
            <CardRow date={'31 Mar 2022'} money={172.21} name={'Envato Withdrawal'} />
            {/*<CardRow date={'7 Jul 2022'} money={283.12} name={'UI8 Withdrawal'} />
            <CardRow date={'7 Jul 2022'} money={283.12} name={'UI8 Withdrawal'} /> */}
        </View>
    );

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
            {_renderHeader()}
            <ScrollView
                contentContainerStyle={{ paddingBottom: 16, paddingHorizontal: 20 }}
                showsVerticalScrollIndicator={false}
                style={{ marginTop: 20 }}
            >
                {_renderChart()}

                {_renderCard()}
            </ScrollView>
        </View>
    );
};

export default Analytics;
