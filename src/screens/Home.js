import React, { useState } from 'react';
import { ImageBackground, Platform, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryContainer } from 'victory-native';

import { Icon } from '~/components';
import { CardAdd, MoneyReceive, MoneySend, ReceiptSearch } from '~/constants/icons';
import { images, COLORS, FONTS, SIZES } from '~/constants';
import GlobalStyles from '~/styles';

const cartInfos = [
    {
        icon: <MoneySend height={22} />,
        title: 'Send',
    },
    {
        icon: <MoneyReceive height={22} />,
        title: 'Request',
    },
    {
        icon: <CardAdd height={22} />,
        title: 'Top up',
    },
    {
        icon: <ReceiptSearch height={22} />,
        title: 'More',
    },
];

const chartData = [
    { label: '', x: 'Sun', y: 30000 },
    { label: '', x: 'Mon', y: 60000 },
    { label: '', x: 'Tue', y: 15000 },
    { label: '', x: 'Wed', y: 40000 },
    { label: '', x: 'Thu', y: 58000 },
    { label: '', x: 'Fri', y: 12000 },
    { label: '', x: 'Sat', y: 37000 },
];

const shortCuts = [
    {
        icon: 'paper-outline',
        name: 'User Manual',
    },
    {
        icon: 'info-square-outline',
        name: 'Security Guide',
    },
    {
        icon: 'call-outline',
        name: 'Hotline',
    },
];

function kFormatter(num) {
    return Math.abs(num) > 999
        ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
        : Math.sign(num) * Math.abs(num);
}

const Home = () => {
    const [position, setPosition] = useState(null);
    const [tooltip, setTooltip] = useState({});

    const _renderHeader = () => (
        <View
            style={{
                alignItems: 'center',
                flexDirection: 'row',
                gap: SIZES.space,
                marginTop: Platform.OS === 'ios' ? 60 : 40,
                paddingHorizontal: SIZES.padding,
            }}
        >
            {/* Category */}
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    alignItems: 'center',
                    backgroundColor: 'white',
                    borderRadius: 15,
                    justifyContent: 'center',
                    height: 44,
                    width: 44,
                }}
            >
                <Icon color={COLORS.primary} name={'category'} size={24} type={'custom'} />
            </TouchableOpacity>

            {/* Name */}
            <View style={{ flex: 1 }}>
                <Text
                    style={[
                        FONTS.body2,
                        {
                            color: COLORS.textPrimary,
                        },
                    ]}
                >
                    Good morning
                </Text>
                <Text style={[FONTS.h3, { color: 'white' }]}>Penguin Here</Text>
            </View>

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

    const _renderCard = () => (
        <View
            style={[
                {
                    alignItems: 'center',
                },
                GlobalStyles.wrapper,
            ]}
        >
            {/* Category */}
            <View
                style={{
                    gap: 4,
                }}
            >
                <Text
                    style={[
                        FONTS.body1,
                        {
                            color: COLORS.textPrimary,
                            textAlign: 'center',
                        },
                    ]}
                >
                    Available Balance
                </Text>
                <Text
                    style={{
                        color: '#13172B',
                        fontFamily: 'SpaceGrotesk-Medium',
                        fontSize: 38,
                        lineHeight: 54,
                        textAlign: 'center',
                    }}
                >
                    $9,248.00
                </Text>
            </View>

            {/* Button */}
            <TouchableOpacity
                activeOpacity={0.7}
                style={{
                    borderColor: COLORS.primary,
                    borderRadius: 50,
                    borderWidth: 1,
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 4,
                    paddingHorizontal: 32,
                    paddingVertical: 5,
                }}
            >
                <Text style={[FONTS.title2, { color: COLORS.primary }]}>See In & Out</Text>

                <Icon color={COLORS.primary} name={'arrow-send-outline'} size={24} type={'custom'} />
            </TouchableOpacity>

            {/* Separate */}
            <View style={{ backgroundColor: '#EFEFEF', height: 1.5, width: '100%' }} />
            <View style={{ flexDirection: 'row' }}>
                {cartInfos.map((item, index) => (
                    <View key={`${index}`} style={{ alignItems: 'center', flex: 1, gap: 8 }}>
                        <View
                            style={{
                                alignItems: 'center',
                                backgroundColor: 'white',
                                borderRadius: 64,
                                justifyContent: 'center',
                                height: 46,
                                width: 46,
                            }}
                        >
                            {item.icon}
                        </View>
                        <Text
                            style={[
                                FONTS.title2,
                                {
                                    color: '#858585',
                                },
                            ]}
                        >
                            {item.title}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );

    const _renderShortcut = () => (
        <View style={GlobalStyles.wrapper}>
            {shortCuts.map((item, index) => (
                <View
                    key={`ShortCut-${index}`}
                    style={{
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: SIZES.base,
                    }}
                >
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: '#F3F4F9',
                            borderRadius: 40,
                            height: 40,
                            width: 40,
                        }}
                    >
                        <Icon color={COLORS.text} name={item.icon} size={20} type={'custom'} />
                    </View>
                    <Text
                        style={[
                            FONTS.title1,
                            {
                                color: COLORS.text,
                                flex: 1,
                            },
                        ]}
                    >
                        {item.name}
                    </Text>
                    <Icon color={COLORS.text} name={'arrow-right-outline'} size={20} type={'custom'} />
                </View>
            ))}
        </View>
    );

    const _renderChart = () => (
        <View style={GlobalStyles.wrapper}>
            <Text
                style={[
                    FONTS.h2,
                    {
                        color: COLORS.text,
                        flex: 1,
                    },
                ]}
            >
                Economic analysis
            </Text>

            <View style={{ backgroundColor: COLORS.primary, borderRadius: SIZES.border, height: 241, width: '100%' }}>
                <VictoryChart
                    containerComponent={<VictoryContainer />}
                    domainPadding={{ x: 20 }}
                    height={241}
                    width={SIZES.width - 30}
                >
                    <VictoryBar
                        cornerRadius={{ top: () => 6 }}
                        data={chartData}
                        events={[
                            {
                                target: 'data',
                                eventHandlers: {
                                    onPressIn: () => {
                                        return [
                                            {
                                                target: 'data',
                                                mutation: (props) => {
                                                    const fill = props.style && props.style.fill;
                                                    if (fill === 'white') {
                                                        setPosition(null);
                                                    } else {
                                                        setPosition(props.index);
                                                    }
                                                },
                                            },
                                            {
                                                target: 'labels',
                                                mutation: (props) => {
                                                    setTooltip({ x: props.x, y: props.y, value: props.datum.y });
                                                    return null;
                                                },
                                            },
                                        ];
                                    },
                                },
                            },
                        ]}
                        style={{
                            data: { fill: ({ _, index }) => (index === position ? 'white' : COLORS.textPrimary) },
                        }}
                    />
                    <VictoryAxis
                        responsive={false}
                        style={{
                            axis: { stroke: COLORS.textPrimary },
                            grid: { stroke: 'transparent' },
                            tickLabels: {
                                fill: ({ _, index }) => (index === position ? 'white' : '#D3D3D3'),
                                fontFamily: 'SpaceGrotesk-Regular',
                                fontSize: 12,
                            },
                        }}
                    />
                    <VictoryAxis
                        offsetY={tooltip?.y ? 241 - tooltip?.y : 0}
                        style={{
                            axis: { stroke: COLORS.textPrimary, strokeWidth: 0.3, strokeDasharray: '10 5' },
                        }}
                        tickFormat={() => ''}
                    />
                    <VictoryAxis
                        dependentAxis
                        style={{
                            axis: { stroke: COLORS.textPrimary },
                            grid: { stroke: 'transparent' },
                            tickLabels: { fill: '#D3D3D3', fontFamily: 'SpaceGrotesk-Regular', fontSize: 12 },
                        }}
                        tickFormat={(datum) => kFormatter(datum)}
                    />
                </VictoryChart>

                {tooltip?.x && (
                    <View
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 30,
                            left: tooltip?.x - 45,
                            paddingHorizontal: 16,
                            paddingVertical: 6,
                            position: 'absolute',
                            top: tooltip?.y - 50,
                        }}
                    >
                        <Text
                            style={[
                                FONTS.title2,
                                {
                                    color: COLORS.text,
                                },
                            ]}
                        >
                            {`$${tooltip?.value.toLocaleString()}`}
                        </Text>
                        <View
                            style={{
                                backgroundColor: 'white',
                                bottom: -3,
                                height: 6,
                                left: 40,
                                position: 'absolute',
                                width: 6,
                                transform: [{ rotate: '45deg' }],
                            }}
                        />
                    </View>
                )}
            </View>
        </View>
    );

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={images.bg} style={{ flex: 1 }}>
                {_renderHeader()}
                <ScrollView
                    contentContainerStyle={{ paddingBottom: SIZES.space, paddingHorizontal: SIZES.padding }}
                    showsVerticalScrollIndicator={false}
                    style={{ marginTop: SIZES.padding }}
                >
                    {_renderCard()}

                    {_renderShortcut()}

                    {_renderChart()}
                </ScrollView>
            </ImageBackground>
        </View>
    );
};

export default Home;
