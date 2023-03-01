export interface Command {
    text: string,
    comment?: string,
    resolution: boolean
}

export interface CountryCommand {
    name: string,
    commands: Command[]
}

export interface Step {
    type: string,
    map?: string,
    title?: string,
    countryCommands: CountryCommand[],
    summary?: string
    info?: {
        comment?: string,
        list?: string[]
    }
}

export interface Turn {
    turnNumber: number,
    steps: Step[]
}