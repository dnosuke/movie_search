import React from "react";
import * as C from "./styles";

const Video= ({ link }) => {

    return (



        <C.Container>
            {link && (
                <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" ></iframe>)
            }
        </C.Container>


    )

}

export default Video;