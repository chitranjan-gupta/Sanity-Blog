import {defineField, defineType} from 'sanity'

export default defineType({
    title: 'Entertainment & Communication',
    name:"entertainment",
    type:"object",
    fields:[
        defineField({
            name: 'wireless_phone_charging',
            title: 'Wireless Phone Charging',
            type: 'string',
        }),
        defineField({
            name: 'touch_screen',
            title: 'Touch Screen',
            type: 'string',
        }),
        defineField({
            name: 'touch_screen_size',
            title: 'Touch Screen size',
            type: 'string',
        }),
        defineField({
            name: 'connectivity',
            title: 'Connectivity',
            type: 'string',
        }),
        defineField({
            name: 'android_auto',
            title: 'Android Auto',
            type: 'string',
        }),
        defineField({
            name: 'apple_carPlay',
            title: 'Apple CarPlay',
            type: 'string',
        }),
        defineField({
            name: 'additional_features',
            title: 'Additional Features',
            type: 'string',
        }),
    ]
})