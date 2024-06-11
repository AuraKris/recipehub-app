export default function resImg({src, pt}){
    return(
        <div className="res-img" style={{paddingTop:pt}}>
            <img src={src} alt=""></img>
        </div>
    )
}