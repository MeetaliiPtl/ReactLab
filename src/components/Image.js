import "./Image.css";

function Image() {
    return <div className="content-container">
        <div className="row">
            <div className="left-panel box">
            <img className='image' src="https://qph.cf2.quoracdn.net/main-qimg-be2f035692adbe264a8ba45a1b0d9ff2-lq" alt="BigCo Inc. logo"/>
            </div>
            
            <div className="right-panel box">
                <div className="container" >
                <h1>  Know more about the Institute</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur <br />
                    adipisicing elit. Unde mollitia provident,
                  </p>
                  <button className ="button">
                    Read more
                  </button>
                    </div>           
                     </div>
       </div>
    </div>
}
export default Image;