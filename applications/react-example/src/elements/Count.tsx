
export interface CountElementProps {
  count: number
}
export const Count = (props: CountElementProps): JSX.Element => {
  const { count } = props
  return (
    <p>
      Count:
      { ' ' }

      { count }
    </p>
  )
}
