export class Team {
    name: string;
    tacticalScheme: Array<number>;
    players: {
        goalkeeper: string;
        defenders: Array<string>,
        middle: Array<string>,
        offensive: Array<string>
    };
    shield: string;
    points: number;
}
