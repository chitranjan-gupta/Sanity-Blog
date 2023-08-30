import {defineField, defineType} from 'sanity'

export default defineType({
    title: 'Dimensions & Capacity',
    name:"dimensions",
    type:"object",
    fields:[
        defineField({
            name: 'length_in_mm',
            title: 'Length (mm)',
            type: 'string',
        }),
        defineField({
            name: 'width_in_mm',
            title: 'Width (mm)',
            type: 'string',
        }),
        defineField({
            name: 'height_in_mm',
            title: 'Height (mm)',
            type: 'string',
        }),
        defineField({
            name: 'seating_capacity',
            title: 'Seating Capacity',
            type: 'string',
        }),
        defineField({
            name: 'ground_clearance_unladen_in_mm',
            title: 'Ground Clearance Unladen (mm)',
            type: 'string',
        }),
        defineField({
            name: 'wheel_base_in_mm',
            title: 'Wheel Base (mm)',
            type: 'string',
        }),
        defineField({
            name: 'front_tread_in_mm',
            title: 'Front Tread (mm)',
            type: 'string',
        }),
        defineField({
            name: 'rear_tread_in_mm',
            title: 'Rear Tread (mm)',
            type: 'string',
        }),
        defineField({
            name: 'kerb_weight_in_Kg',
            title: 'Kerb Weight (Kg)',
            type: 'string',
        }),
        defineField({
            name: 'gross_weight_in_Kg',
            title: 'Gross Weight (Kg)',
            type: 'string',
        }),
        defineField({
            name: 'rear_seat_base_width',
            title: 'Rear Seat Base Width',
            type: 'string',
        }),
        defineField({
            name: 'rear_legroom_in_mm',
            title: 'Rear Legroom (mm)',
            type: 'string',
        }),
        defineField({
            name: 'front_headroom_in_mm',
            title: 'Front Headroom (mm)',
            type: 'string',
        }),
        defineField({
            name: 'front_legroom',
            title: 'Front Legroom',
            type: 'string',
        }),
        defineField({
            name: 'no_of_doors',
            title: 'No of Doors',
            type: 'string',
        }),
    ]
})