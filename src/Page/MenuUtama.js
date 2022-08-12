import React, {Component} from "react";
import ListMenuUtama from "../ListData/ListMenuUtama";

class MenuUtama extends Component {
    render() {
        return (
            <div>
                <ListMenuUtama makanan="https://tinyurl.com/foodnusantara" />
            </div>
        )
    }
};

export default MenuUtama;