import { Link } from "react-router-dom";

export default function Homepage(){
    return(
        <div className="main-wrap">
            <div className="content-wrap">
                <h1>HEARTHSTONE</h1>
                    <div className="button-wrap">
                        <Link to='/cardback'>
                            <button>Card Backs</button>
                        </Link>
        </div>
            </div>
                    </div>
    );
}