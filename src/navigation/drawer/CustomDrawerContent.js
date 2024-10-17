import React, { memo } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import { Icon } from '~/components';
import { images, FONTS, SIZES } from '~/constants';

const navigateItems = [
    {
        name: 'Notification',
        child: true,
    },
    {
        name: 'Payment request',
        child: true,
    },
    {
        name: 'Explore apps',
        child: true,
    },
    {
        name: 'Promotion',
        child: false,
    },
    {
        name: 'Settings',
        child: true,
    },
    {
        name: 'Referral',
        child: false,
    },
    {
        name: 'Log out',
        color: '#FF1010',
    },
];

const CustomDrawerContent = () => {
    return (
        <View style={{ flex: 1, paddingLeft: SIZES.padding }}>
            <View style={{ marginTop: 75 }}>
                <Image
                    source={images.avatar}
                    resizeMode={'center'}
                    style={{ height: 88, width: 88, borderRadius: SIZES.border }}
                />
            </View>

            <View style={{ marginTop: SIZES.space }}>
                <Text style={[FONTS.h1, { color: 'white' }]}>Penguin Here</Text>
                <Text style={{ color: 'white', fontFamily: 'Overpass-Regular', fontSize: 14, lineHeight: 22 }}>
                    Penguin Here
                </Text>
            </View>

            <View
                style={{
                    backgroundColor: 'white',
                    borderRadius: SIZES.border,
                    gap: SIZES.padding,
                    marginTop: 32,
                    paddingHorizontal: SIZES.space,
                    paddingVertical: SIZES.base,
                }}
            >
                {navigateItems.map((item, index) => (
                    <TouchableOpacity
                        activeOpacity={0.7}
                        key={`${index}`}
                        style={{ alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}
                    >
                        <Text
                            style={[
                                FONTS.body1,
                                {
                                    color: item?.color ? item?.color : '#090D20',
                                },
                            ]}
                        >
                            {item.name}
                        </Text>
                        {item?.child && (
                            <Icon color={'#130F26'} name={'arrow-right-outline'} size={20} type={'custom'} />
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default memo(CustomDrawerContent);
