import react from 'react'

import { Container, DispositivosContent } from './styles'

import alexaOnImg from '../../assets/svgs/alexa-on.svg'
import alexaOffImg from '../../assets/svgs/alexa-off.svg'

const TableDispositivos = (): JSX.Element => {

    return(
        <Container>
            <DispositivosContent>
                <div className="disp-onlines">
                    <li>
                        <img src={alexaOnImg} alt="" />
                        <p>Iphone Gabriel</p>
                    </li>
                </div>
                <div className="disp-offlines">
                    <li>
                        <p>Computador Gabriel</p>
                    </li>
                </div>
                <div className="disp-onlines">
                    <li>
                        <img src={alexaOnImg} alt="" />
                        <p>Iphone Gabriel</p>
                    </li>
                </div>
                <div className="disp-offlines">
                    <li>
                        <p>Computador Gabriel</p>
                    </li>
                </div>
                <div className="disp-onlines">
                    <li>
                        <img src={alexaOnImg} alt="" />
                        <p>Iphone Gabriel</p>
                    </li>
                </div>
                <div className="disp-offlines">
                    <li>
                        <p>Computador Gabriel</p>
                    </li>
                </div>
                <div className="disp-onlines">
                    <li>
                        <img src={alexaOnImg} alt="" />
                        <p>Iphone Gabriel</p>
                    </li>
                </div>
                <div className="disp-offlines">
                    <li>
                        <p>Computador Gabriel</p>
                    </li>
                </div>
            </DispositivosContent>
        </Container>
    );
}

export default TableDispositivos;