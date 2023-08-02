import { IServerRepository } from "../../data/interfaces/i-server-repository";

export class ServerService {
    constructor(private readonly _serverRepo: IServerRepository) {}
}