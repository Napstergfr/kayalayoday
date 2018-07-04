export interface  Touchpoint {
    meetingid: number;
}

export class Distribution implements IDistribution {
    distOptionId = 0;
}

export interface IDistribution {
    distOptionId: number;
}