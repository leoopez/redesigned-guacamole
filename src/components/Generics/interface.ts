export interface IStyleComponent {
    className?: string;
}
export interface ISection {
    className?: string;
    id: string;
    children?: JSX.Element|JSX.Element[]|string;
}