import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Blog',

  projectId: process.env.SANITY_STUDIO_PROJECT_ID,
  dataset: process.env.SANITY_STUDIO_DATASET,
  server: {
    hostname: 'localhost',
    port: 3333,
  },
  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
