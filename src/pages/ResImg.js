export default function resImg({src, pt}){
    return(
        <div className="res-img" style={{paddingTop:pt}}>
            <img src={`${process.env.PUBLIC_URL}/${src}`} alt=""></img>
        </div>
    )
}