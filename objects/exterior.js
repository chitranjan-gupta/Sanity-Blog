import {defineField, defineType} from 'sanity'

export default defineType({
    title: 'Exterior',
    name:"exterior",
    type:"object",
    fields:[
        defineField({
            name: 'adjustable_headlights',
            title: 'Adjustable Headlights',
            type: 'string',
        }),
        defineField({
            name: 'fog_lights_front',
            title: 'Fog Lights - Front',
            type: 'string',
        }),
        defineField({
            name: 'electric_folding_rear_view_mirror',
            title: 'Electric Folding Rear View Mirror',
            type: 'string',
        }),
        defineField({
            name: 'rain_sensing_wiper',
            title: 'Rain Sensing Wiper',
            type: 'string',
        }),
        defineField({
            name: 'rear_window_wiper',
            title: 'Rear Window Wiper',
            type: 'string',
        }),
        defineField({
            name: 'rear_window_defogger',
            title: 'Rear Window Defogger',
            type: 'string',
        }),
        defineField({
            name: 'alloy_wheels',
            title: 'Alloy Wheels',
            type: 'string',
        }),
        defineField({
            name: 'rear_spoiler',
            title: 'Rear Spoiler',
            type: 'string',
        }),
        defineField({
            name: 'sun_roof',
            title: 'Sun Roof',
            type: 'string',
        }),
        defineField({
            name: 'side_stepper',
            title: 'Side Stepper',
            type: 'string',
        }),
        defineField({
            name: 'outside_rear_view_mirror_turn_indicators',
            title: 'Outside Rear View Mirror Turn Indicators',
            type: 'string',
        }),
        defineField({
            name: 'intergrated_antenna',
            title: 'Intergrated Antenna',
            type: 'string',
        }),
        defineField({
            name: 'dual_tone_body_colour',
            title: 'Dual Tone Body Colour',
            type: 'string',
        }),
    ]
})