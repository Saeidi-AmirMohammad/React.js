import React from "react";

// function Card(props){
//     return(
//         <div className="card">
//             <header className="card-header">
//                 <h2>{props.headTitle}</h2>
//             </header>
//             <section className="card-body">
//                 <p>{props.body}</p>
//             </section>
//             <footer className="card-footer">
//             <h2>{props.footerText}</h2>
//             </footer>
//         </div>
//     )
// }


class Card extends React.Component {
render(){
    return(
                <div className="card">
                    <header className="card-header">
                        <h2>{this.props.headTitle}</h2>
                    </header>
                    <section className="card-body">
                        <p>{this.props.body}</p>
                    </section>
                    <footer className="card-footer">
                    <h2>{this.props.footerText}</h2>
                    </footer>
                </div>
            )
}
}

export default Card;