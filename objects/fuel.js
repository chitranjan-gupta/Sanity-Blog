import {defineField, defineType} from 'sanity'

export default defineType({
  title: 'Fuel & Performance',
  name: 'fuel',
  type: 'object',
  fields: [
    defineField({
      name: 'fuel_type',
      title: 'Fuel Type',
      type: 'string',
    }),
    defineField({
      name: 'city_mileage',
      title: 'City Mileage',
      type: 'string',
    }),
    defineField({
      name: 'highway_mileage',
      title: 'Highway Mileage',
      type: 'string',
    }),
    defineField({
      name: 'aRAI_mileage',
      title: 'ARAI Mileage',
      type: 'string',
    }),
    defineField({
      name: 'fuel_tank_capacity_in_L',
      title: 'Fuel Tank Capacity (in Litres)',
      type: 'string',
    }),
    defineField({
      name: 'emission_norm_compliance',
      title: 'Emission Norm Compliance',
      type: 'string',
    }),
  ],
})
