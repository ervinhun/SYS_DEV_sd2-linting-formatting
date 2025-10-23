import { FC } from "react";


export interface IsItFixed4Props {
onClick?: () => void;
}


export const IsItFixed4: FC<IsItFixed4Props> = ({ onClick }) => {
const handleClick = () => {
if (onClick) {
onClick();
} else {
// TODO: implement button logic
console.log('IsItFixed4 clicked');
}
};

return (
<button onClick={handleClick}>
    IsItFixed4
</button>
);
};