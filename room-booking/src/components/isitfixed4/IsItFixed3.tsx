import { FC } from "react";


export interface IsItFixed3Props {
onClick?: () => void;
}


export const IsItFixed3: FC<IsItFixed3Props> = ({ onClick }) => {
const handleClick = () => {
if (onClick) {
onClick();
} else {
// TODO: implement button logic
console.log('IsItFixed3 clicked');
}
};

return (
<button onClick={handleClick}>
    IsItFixed3
</button>
);
};