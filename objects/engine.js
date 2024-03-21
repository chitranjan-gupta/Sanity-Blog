import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'engine',
  title: 'Engine and Transmission',
  type: 'object',
  fields: [
    defineField({
      name: 'engine_type',
      title: 'Engine Type',
      type: 'string',
    }),
    defineField({
      name: 'displacement_in_cc',
      title: 'Displacement (cc)',
      type: 'string',
    }),
    defineField({
      name: 'max_power',
      title: 'Max Power',
      type: 'string',
    }),
    defineField({
      name: 'max_torque',
      title: 'Max Torque',
      type: 'string',
    }),
    defineField({
      name: 'no_of_cylinder',
      title: 'No. of cylinder',
      type: 'string',
    }),
    defineField({
      name: 'valves_per_cylinder',
      title: 'Valves Per Cylinder',
      type: 'string',
    }),
    defineField({
      name: 'turbo_charger',
      title: 'Turbo Charger',
      type: 'string',
    }),
    defineField({
      name: 'transmission_type',
      title: 'Transmission Type',
      type: 'string',
    }),
    defineField({
      name: 'mild_hybrid',
      title: 'Mild Hybrid',
      type: 'string',
    }),
    defineField({
      name: 'gear_box',
      title: 'Gear Box',
      type: 'string',
    }),
    defineField({
      name: 'drive_type',
      title: 'Drive Type',
      type: 'string',
    }),
  ],
})
