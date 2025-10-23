import { FC } from "react";


export interface ExItProps {
onClick?: () => void;
}


export const ExIt: FC<ExItProps> = ({ onClick }) => {
const handleClick = () => {
if (onClick) {
onClick();
} else {
// TODO: implement button logic
console.log('ExIt clicked');
}
};

return (
<button onClick={handleClick}>
    ExIt
</button>
);
};