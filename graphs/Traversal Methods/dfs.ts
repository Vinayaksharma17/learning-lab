import { Graph } from './graph'

declare module './graph' {
  interface Graph {
    bfs(startingNode: any): any[]
  }

  
}
