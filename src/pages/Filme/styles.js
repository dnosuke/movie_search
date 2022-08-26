import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: .1rem;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 2rem;
    }

    h1 {
        font-size: 25px;
        text-transform: uppercase;
        letter-spacing: 2px;
        
    }

    .card-title {  
        display: flex;
        width: 60vw;
        justify-content: space-between;
        align-items: center;
        margin-top: -1rem;
        z-index: 2222;
    }

    p {
        width: 700px;
        padding: 0 2rem 0;
        font-size: 20px;
        letter-spacing: -.1px;
    }
    
    img {
        width: 800px;
        height: auto;
        border-radius: 10px;
    }
    
    .degrade {
        width: 800px;
        height: 450px;
        background: linear-gradient(to top,rgb(25,28,29),transparent);
        position: absolute;
    }
    
    .details {
        width: 800px;
        display: flex;
        justify-content: center;
        
        .date {
            align-self: center;
            font-size: 14px;
            margin-top: 2rem;
            margin-bottom: 2rem;
        }
    }

    .evaluation {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 100px;
        font-size: 30px;
        border: 4px;
        border-style: solid;
        border-color: rgb(72,113,107);
        color: rgb(72,113,107);
        border-radius: 50px;

        i {
            margin-left: 2.5rem;
        }

        p {

            margin-left: -1.5rem;
            margin-right: 1rem;
            font-size: 30px;
        }
    }
    

    @media screen and (max-width: 400px){
        margin: 0;
        .content {
            margin: .1rem;
        }
        img {
            width: 100vw;
            border-radius: 0;
        }

        .degrade {
        width: 100vw;
        height: 221px;
    }

    .details {
        width: 90vw;
    }

    .evaluation {
        width: 20vw;
        height: 10vh;
        i {
            font-size: 20px;
        }
        p {

            margin-left: .5rem;
            margin-right: 3rem;
            font-size: 20px;
        }
    }

    .card-title {
        width: 100vw;
    }

        h1 {  
        font-size: 16px;
        margin-left: 1rem;
    }

    p {
        width: 317px;
        padding: 1rem 0;
    }

    }
`;