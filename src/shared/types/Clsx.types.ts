export type Styles<T = string> = { [key: string]: T }

export type ClsxProps = (string | Styles<unknown>)[]
