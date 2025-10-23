import { FC } from "react";


export interface IsUtFixedProps {
onClick?: () => void;
}


export const IsUtFixed: FC<IsUtFixedProps> = ({ onClick }) => {
const handleClick = () => {
if (onClick) {
onClick();
} else {
// TODO: implement button logic
console.log('IsUtFixed clicked');
}
};

return (
<button onClick={handleClick}>
    IsUtFixed
</button>
);
};