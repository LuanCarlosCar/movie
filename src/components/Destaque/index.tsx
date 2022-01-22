import { DestaqueTitle, DestaqueText, DestaqueContainer, DestaqueCardFilme, CardFilme, CardFilme2 } from './styled';

export default function Destaque(){
    return(
        <DestaqueContainer>
            <DestaqueTitle>Mundo nerd? <br/>Naped!</DestaqueTitle>
            <DestaqueText>O Naped pode ser sua fonte de informações sobre <br/> o mundo nerd e outros assuntos relacionados</DestaqueText>
            
            <ul>
                <DestaqueCardFilme><span>Status</span> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p></DestaqueCardFilme>
                <div>
                <CardFilme><span>Status</span> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p></CardFilme>
                <CardFilme2><span>Status</span> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eros tellus, malesuada et velit in, blandit molestie dolor.</p></CardFilme2>

                </div>
            </ul>
        </DestaqueContainer>
    )
}