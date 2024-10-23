import Link from "next/link";
interface Props {
  functionClick: any;
}

const OtherButtons: React.FC<Props> = ({functionClick}) => {
  return (
    <>
        <div onClick={functionClick} style={{display: "flex", justifyContent: "center", marginTop: '2rem', marginBottom: '4rem'}}>
          <div className="other_button"><span>Показать ещё</span></div>
        </div>
    </>
  )
}

export default OtherButtons