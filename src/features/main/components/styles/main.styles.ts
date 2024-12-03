import styled from "styled-components";

export const MainFrame = styled.div<{ src: any }>`
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 10vh;
width: 17%;
height: 45%;
background: url(${({ src }) => src});
background-repeat: repeat;
background-size: 100% 100%;
padding: 3.5vh 1.7% 3.2vh 1.7%;
box-shadow: 0 18px 15px 12px rgba(0, 0, 0, 0.55);
/* padding: 3.6vh 1.6vw 3.1vh 1.6vw; */
`;

export const BestImg = styled.img<{ src: any }>`
width: 100%;
height: 100%;
object-fit: fill;
background-color: #ffffff;
`;