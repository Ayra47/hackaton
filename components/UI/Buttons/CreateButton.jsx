import s from './CreateButton.module.scss';

const LinkButtonColorMap = {
    "blue": s['button--blue'],
    "red" : s['button--red'],
    "contur" : s['button--contur'],
    "orange" : s['button--orange']
}

const LinkButtonSizeMap = {
    "sm": s['button--sm'],
    "xxl": s['button--xxl'],
}

export default function CreateButton({color, size, onClick, children}) {
    let currentColor = color ? LinkButtonColorMap[color] : LinkButtonColorMap.blue;
    let currentSize = size ? LinkButtonSizeMap[size] : "";

    return <button onClick={onClick} className={`${s.button} ${currentColor} ${currentSize}`}>
        {children}
    </button>
}
