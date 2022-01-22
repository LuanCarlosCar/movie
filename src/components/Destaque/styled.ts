import styled from 'styled-components';

export const DestaqueContainer = styled.section`
    margin-top: 7.125rem;
    ul{
        display: grid;
        grid-template-columns: 1fr auto;
        grid-row: auto auto;
        grid-template-areas: 
        "destaque normal"
        "destaque normal"
        
        ;
        
        
    }
`;
export const DestaqueTitle = styled.h1`
    font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    font-size: 3rem;
    line-height: 3.75rem;
    color: #FEFBFB;
`;
export const DestaqueText = styled.p`
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    color: #C4C4C4;
    font-size: 1.25rem;
    line-height: 2rem;
    margin-top: 0.3125rem;

    margin-bottom: 80px;
`;

export const DestaqueCardFilme = styled.li`
    background-color: red;
    width: 761px;
    height: 350px;
    padding: 0 30px;
    box-sizing: border-box;
    position: relative;
    grid-area: 'destaque';
    span{
        padding: 4px 18px;
        box-sizing: border-box;
        position: absolute;
        margin-top: 15px ;
        background-color: #8257E6;
        width: 80px;
        height: 25px;
        border-radius: 3px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #FEFBFB;
    }
    p{
       position: absolute;
       bottom: 0;
       margin-bottom: 15px;
       font-family: 'Lexend Deca', sans-serif;
       font-size: 24px;
       font-weight: 400;
       color: #FEFBFB;
       line-height: 34px;

    }
`;
export const CardFilme = styled.li`
    background-color: yellow;
    width: 338px;
    height: 165px;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    grid-area: 'normal';
    margin-bottom: 20px;
    span{
        padding: 2px 18px;
        box-sizing: border-box;
        position: absolute;
        margin-top: 10px ;
        background-color: #8257E6;
        width: 70px;
        height: 20px;
        border-radius: 3px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #FEFBFB;
    }
    p{
       position: absolute;
       bottom: 0;
       margin-bottom: 10px;
       font-family: 'Lexend Deca', sans-serif;
       font-size: 13px;
       font-weight: 400;
       color: #FEFBFB;
       line-height: 20px;

    }
`;
export const CardFilme2 = styled.li`
    background-color: yellow;
    width: 338px;
    height: 165px;
    padding: 0 20px;
    box-sizing: border-box;
    position: relative;
    grid-area: 'normal2';
    span{
        padding: 2px 18px;
        box-sizing: border-box;
        position: absolute;
        margin-top: 10px ;
        background-color: #8257E6;
        width: 70px;
        height: 20px;
        border-radius: 3px;
        font-family: 'Lexend Deca', sans-serif;
        font-weight: 400;
        font-size: 12px;
        color: #FEFBFB;
    }
    p{
       position: absolute;
       bottom: 0;
       margin-bottom: 10px;
       font-family: 'Lexend Deca', sans-serif;
       font-size: 13px;
       font-weight: 400;
       color: #FEFBFB;
       line-height: 20px;

    }
`;
