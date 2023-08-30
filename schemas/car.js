import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'car',
  title: 'Car',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'base',
      title: 'Base',
      type: 'boolean',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'brands',
      title: 'Brand',
      type: 'array',
      of: [{type: 'reference', to: {type: 'brand'}}],
    }),
    defineField({
      name: 'vehicletype',
      title: 'Vehicle Type',
      type: 'array',
      of: [{type: 'reference', to: {type: 'vehicletype'}}],
    }),
    defineField({
      name: 'colours',
      title: 'Colours',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'colour',
          title: 'Colour',
          type: 'colour',
        }),
      ],
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'interior',
          title: 'Interior',
          type: 'images',
        }),
        defineArrayMember({
          name: 'exterior',
          title: 'Exterior',
          type: 'images',
        }),
        defineArrayMember({
          name: 'others',
          title: 'Others',
          type: 'images',
        }),
      ],
    }),
    defineField({
      name: 'variants',
      title: 'Variants',
      type: 'array',
      of: [{type: 'reference', to: {type: 'carvariant'}}],
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
    }),
  ],
})
