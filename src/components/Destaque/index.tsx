import { DestaqueTitle, DestaqueText, DestaqueContainer } from './styled';

export default function Destaque(){
    return(
        <DestaqueContainer>
            <DestaqueTitle>Mundo nerd? <br/>Naped!</DestaqueTitle>
            <DestaqueText>O Naped pode ser sua fonte de informações sobre <br/> o mundo nerd e outros assuntos relacionados</DestaqueText>
            
            <ul>
                <li><span>Status</span> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p></li>
                <li><span>Status</span> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p></li>
                <li><span>Status</span> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p></li>
            </ul>
        </DestaqueContainer>
    )
}