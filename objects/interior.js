import {defineField, defineType} from 'sanity'

export default defineType({
    title: 'Interior',
    name:"interior",
    type:"object",
    fields:[
        defineField({
            name: 'tachometer',
            title: 'Tachometer',
            type: 'string',
        }),
        defineField({
            name: 'electronic_multi_tripmeter',
            title: 'Electronic Multi-Tripmeter',
            type: 'string',
        }),
        defineField({
            name: 'leather_seats',
            title: 'Leather Seats',
            type: 'string',
        }),
        defineField({
            name: 'leather_steering_wheel',
            title: 'Leather Steering Wheel',
            type: 'string',
        }),
        defineField({
            name: 'leather_wrap_gear_shift_selector',
            title: 'Leather wrap gear-shift selector',
            type: 'string',
        }),
        defineField({
            name: 'glove_compartment',
            title: 'Glove Compartment',
            type: 'string',
        }),
        defineField({
            name: 'digital_clock',
            title: 'Digital Clock',
            type: 'string',
        }),
        defineField({
            name: 'outside_temperature_display',
            title: 'Outside Temperature Display',
            type: 'string',
        }),
        defineField({
            name: 'digital_odometer',
            title: 'Digital Odometer',
            type: 'string',
        }),
        defineField({
            name: 'driving_experience_control_eco',
            title: 'Driving Experience Control Eco',
            type: 'string',
        }),
        defineField({
            name: 'dual_tone_dashboard',
            title: 'Dual Tone Dashboard',
            type: 'string',
        }),
        defineField({
            name: 'additional_features',
            title: 'Additional Features',
            type: 'string',
        }),
    ]
})