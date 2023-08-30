import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Images',
  name: 'images',
  type: 'object',
  fields: [
    defineField({
      name: 'imageurl',
      title: 'Image URL',
      type: 'string',
    }),
  ],
})
