import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Safety',
  name: 'safety',
  type: 'object',
  fields: [
    defineField({
      name: 'advance_safety_features',
      title: 'Advance Safety Features',
      type: 'string',
    }),
  ],
})
