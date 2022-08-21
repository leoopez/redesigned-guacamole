import { IStyleComponent } from "../../Generics/interface";

export default ({ children }: IStyleComponent) => {
    return (
        <li>
            {children}
        </li>
    )
};
