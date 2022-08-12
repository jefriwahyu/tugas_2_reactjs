import React, {Component} from "react";

class ListMenuUtama extends Component {
    render() {
        return (
            <div>
                <center><h1>Selamat Datang Di Warung Nusantara</h1></center>
                <center><img src={this.props.makanan} alt="Makanan Nusantara" width="600"/></center>
            </div>
        )
    };
};

export default ListMenuUtama;