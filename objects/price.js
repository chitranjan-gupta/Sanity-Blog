import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'price',
  title: 'Price',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'ex_showroom_price',
      title: 'Ex-Showroom Price',
      type: 'string',
    }),
    defineField({
      name: 'tCS',
      title: 'TCS',
      type: 'string',
    }),
    defineField({
      name: 'road_tax',
      title: 'Road Tax',
      type: 'string',
    }),
    defineField({
      name: 'additional',
      title: 'Additional',
      type: 'string',
    }),
    defineField({
      name: 'registration_charges',
      title: 'Registration Charges',
      type: 'string',
    }),
    defineField({
      name: 'fasTag',
      title: 'FasTag',
      type: 'string',
    }),
    defineField({
      name: 'hypothecation_endorsement',
      title: 'Hypothecation Endorsement',
      type: 'string',
    }),
    defineField({
      name: 'road_safety_cess',
      title: 'Road Safety Cess',
      type: 'string',
    }),
    defineField({
      name: 'insurance',
      title: 'Insurance',
      type: 'string',
    }),
    defineField({
      name: 'other_charges',
      title: 'Other charges',
      type: 'string',
    }),
    defineField({
      name: 'on_road_price',
      title: 'On-Road Price',
      type: 'string',
    }),
  ],
})
