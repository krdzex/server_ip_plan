import { ServerStatus } from "@prisma/client"

export interface IServer {
  id: Number
  name: string
  description: String
  status: ServerStatus
}