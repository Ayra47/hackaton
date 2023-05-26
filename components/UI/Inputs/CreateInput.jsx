import s from "./CreateInput.module.scss";

const LinkButtonColorMap = {
    "default": s['input'],
    "black": s['input--black']
}

const LinkButtonFocusMap = {
    'blue' : s['input--focus']
}

export default function CreateInput(props) {
    const currentColor = props.color ? LinkButtonColorMap[props.color] : LinkButtonColorMap.default;
    const currentFocus = props.focus ? LinkButtonFocusMap[props.focus] : "";
    return <input className={`${s.input} ${currentColor} ${currentFocus}`} {...props} />;
}
