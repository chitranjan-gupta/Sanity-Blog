import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Colour',
  name: 'colour',
  type: 'object',
  fields: [
    defineField({
      name: 'colourname',
      title: 'Colour Name',
      type: 'string',
    }),
    defineField({
      name: 'colourvalue',
      title: 'Colour Value',
      type: 'string',
    }),
    defineField({
      name: 'coloururl',
      title: 'Colour URL',
      type: 'string',
    }),
  ],
})
