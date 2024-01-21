import React from "react";
import styled from "styled-components";

const Nav = styled.div`
    width:100%;
    height:70px;
    background:linear-gradient(170deg,#1bc059,#0d47a1);
    display:flex;
    justify-content: space-between;
`;


const Title = styled.div`
    font-size:30px;
    color:#fff;
    font-weight:600;
    font-family:'Times New Roman',Times,sans-serif;
    text-transform:uppercase;
    margin-left:20px;

    &:hover{color:#0f0}



`;

const CartImg = styled.img`
    height:48px;
    margin-right:20px;
`;

const CartIconContainer = styled.div`
    position:relative;
    cursor:pointer;
`;

const CartCount = styled.div`
    background-color:${(props)=> props.color};
    border-radius:50%;
    padding:4px 8px;
    position:absolute;
    right:10px;
    top:-5px;
    font-size:12px;

    display: ${(props)=> props.show?'block;':'none;'}
`;

export default class Navbar extends React.Component {

    render() {
        return (
            <>
                <Nav>
                    <Title>Movie-app</Title>
                    <CartIconContainer>
                        <CartImg alt="Cart Icon" src="https://cdn-icons-png.flaticon.com/128/"/>
                        <CartCount color="yellow" show={true}>0</CartCount>
                    </CartIconContainer>
                </Nav>

            </>
        )
    }
}

const styles = {
    nav: {
        width: "100%",
        height: 70,
        background: "cadetblue",
        display: "flex",
        justifyContent: "space-between"
    }
}

