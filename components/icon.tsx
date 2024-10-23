interface Props {
  size?: any;
  color?: any;
}

const withIcon: (icon: any) => React.FunctionComponent<Props> = icon => {
  const Icon: React.FC<Props> = ({
    size = 24,
    color
}) => {
    return (
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill={color}
        dangerouslySetInnerHTML={{__html: icon}}
      />
    )
  }

  return Icon
}

export default withIcon