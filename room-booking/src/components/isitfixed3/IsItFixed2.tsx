import { FC } from "react";


export interface IsItFixed2Props {
onClick?: () => void;
}


export const IsItFixed2: FC<IsItFixed2Props> = ({ onClick }) => {
const handleClick = () => {
if (onClick) {
onClick();
} else {
// TODO: implement button logic
console.log('IsItFixed2 clicked');
}
};

return (
<button onClick={handleClick}>
    IsItFixed2
</button>
);
};