export class IpPlanDto {
  constructor(
    public readonly id: Number,
    public readonly name: String,
    public readonly description: String,
    public readonly price: Number
  ) {}
}