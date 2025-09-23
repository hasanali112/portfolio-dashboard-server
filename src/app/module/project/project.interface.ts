export type TProjct = {
  projectTitle: string
  description: string
  projectImage: string[]
  liveLink: string
  gitRepoLinkFrontend?: string
  gitRepoLinkBackend?: string
  technology: {
    technologyName: string
    technologyImage: string
  }[]
}
