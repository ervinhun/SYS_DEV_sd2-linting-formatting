import { FC } from "react";


export interface IsItFixedProps {
onClick?: () => void;
}


export const IsItFixed: FC<IsItFixedProps> = ({ onClick }) => {
const handleClick = () => {
if (onClick) {
onClick();
} else {
// TODO: implement button logic
console.log('IsItFixed clicked');
}
};

return (
<button onClick={handleClick}>
    IsItFixed
</button>
);
};