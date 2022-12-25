import { CSSProperties } from "react"

export const CustomImage = ({url, alt, style}: {url: string, alt?: string, style?: CSSProperties}) => {
    return <picture>
        <img src={url} alt={url} style={style} />
    </picture>
}