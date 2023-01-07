
export interface CountElementProps {
  count: number
}
export const Count = (props: CountElementProps) => {
  const { count } = props
  return (
    <p>
      Count:
      { ' ' }

      { count }
    </p>
  )
}
