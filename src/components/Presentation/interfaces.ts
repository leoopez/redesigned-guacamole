export interface ITerminal {
    className?: string;
    commands: string[]
}
  
export interface ITerminalCommand {
    children?: JSX.Element;
    text: string;
    nCommand: number
}

export interface IName {
    className?: string;
    name: string;
}

export interface ITerminalHeader {
    className?: string;
}