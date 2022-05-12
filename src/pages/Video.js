function Video({ link }) {

    return (



        <div>
            {link && (
                <iframe width="560" height="315" src={link} title="YouTube video player" frameBorder="0" ></iframe>)
            }
        </div>


    )

}

export default Video;