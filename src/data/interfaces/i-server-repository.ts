import { IServer } from "../models/server.model";

export interface IServerRepository {
    getServerById(id: number): Promise<IServer | null>;
}