import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'carvariant',
  title: 'Car Variant',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'base',
      title: 'Base Model',
      type: 'array',
      of: [{type: 'reference', to: {type: 'car'}}],
    }),
    defineField({
      name: 'specification',
      title: 'Specification',
      type: 'array',
      of: [
        defineArrayMember({
          title: 'Engine and Transmission',
          name: 'engine',
          type: 'engine',
        }),
        defineArrayMember({
          title: 'Fuel & Performance',
          name: 'fuel',
          type: 'fuel',
        }),
        defineArrayMember({
          title: 'Suspension, Steering & Brakes',
          name: 'suspension',
          type: 'suspension',
        }),
        defineArrayMember({
          title: 'Dimensions & Capacity',
          name: 'dimensions',
          type: 'dimensions',
        }),
        defineArrayMember({
          title: 'Comfort & Convenience',
          name: 'comfort',
          type: 'comfort',
        }),
        defineArrayMember({
          title: 'Interior',
          name: 'interior',
          type: 'interior',
        }),
        defineArrayMember({
          title: 'Exterior',
          name: 'exterior',
          type: 'exterior',
        }),
        defineArrayMember({
          title: 'Safety',
          name: 'safety',
          type: 'safety',
        }),
        defineArrayMember({
          title: 'Entertainment & Communication',
          name: 'entertainment',
          type: 'entertainment',
        }),
      ],
    }),
    defineField({
      name: 'prices',
      title: 'Prices',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'price',
          title: 'Price',
          type: 'price',
        }),
      ],
    }),
  ],
})
