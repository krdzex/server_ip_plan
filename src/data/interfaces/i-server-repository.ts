import { IServer } from "../models/server.model";

export interface IServerRepository {
  findServerById(id: number): Promise<IServer | null>;
}