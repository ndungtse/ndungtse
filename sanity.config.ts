import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './src/sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'Sanity',
  projectId: 'rsb1msea',
  dataset: 'production',
  basePath: '/admin',
  apiVersion: '2021-03-25',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
})
