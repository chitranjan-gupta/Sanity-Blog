import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Suspension, Steering & Brakes',
  name: 'suspension',
  type: 'object',
  fields: [
    defineField({
      name: 'front_suspension',
      title: 'Front Suspension',
      type: 'string',
    }),
    defineField({
      name: 'rear_suspension',
      title: 'Rear Suspension',
      type: 'string',
    }),
    defineField({
      name: 'acceleration',
      title: 'Acceleration',
      type: 'string',
    }),
    defineField({
      name: 'zero_to_100kmph',
      title: '0-100kmph',
      type: 'string',
    }),
    defineField({
      name: 'steering_type',
      title: 'Steering Type',
      type: 'string',
    }),
    defineField({
      name: 'steering_column',
      title: 'Steering Column',
      type: 'string',
    }),
    defineField({
      name: 'front_brake_type',
      title: 'Front Brake Type',
      type: 'string',
    }),
    defineField({
      name: 'rear_brake_type',
      title: 'Rear Brake Type',
      type: 'string',
    }),
  ],
})
