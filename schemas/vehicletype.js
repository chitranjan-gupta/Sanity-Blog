import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'vehicletype',
  title: 'Vehicle Type',
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
      type: 'text',
    }),
  ],
})
