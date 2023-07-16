import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  project: {
    basePath: '/studio'
  },
  api: {
    projectId: 'ndix7yog',
    dataset: 'production'
  }
})
