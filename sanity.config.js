import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Blog',

  projectId: 'ndix7yog',
  dataset: 'production',
  server: {
    hostname: "localhost",
    port: 3333,
  },
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
