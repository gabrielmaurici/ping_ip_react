import react from 'react'

import { Container, DispositivosContent } from './styles'
import { SiAmazonalexa, SiAmazonfiretv } from 'react-icons/si';
import { MdOutlinePhoneIphone, MdLightbulbOutline } from 'react-icons/md';
import { RiRemoteControlLine } from 'react-icons/ri';
import { HiOutlineDesktopComputer } from 'react-icons/hi';

const TableDispositivos = (): JSX.Element => {
    let nomes = [{nome:'SmartHome', status: true}, {nome:'Celular', status: true},{nome: 'Computador', status: false}, {nome:'Luz', status: true}, {nome:'Luz', status: true}, {nome: 'ControleSmart', status: false}]

    return(
        <Container>
            <DispositivosContent>

                {
                    nomes.map((nome: any) => 
                        <div  className={ nome.status === true ? "disp-onlines" : "disp-offlines"}>
                            <li key={nome}>
                                {(() => {
                                        if (nome.nome === 'SmartHome') {
                                            return (
                                                <>
                                                    <SiAmazonalexa size="40%" color="white" />

                                                    <p>sadas</p>
                                                </>
                                            )
                                        } else if (nome.nome === 'Computador') {
                                            return (
                                                <>
                                                    <HiOutlineDesktopComputer size="40%" color="white" /> 
                                                
                                                    <p>s</p>
                                                </>
                                            )
                                        } else if (nome.nome === 'Celular') {
                                            return (
                                                <>
                                                    <MdOutlinePhoneIphone size="40%" color="white" /> 
                                                
                                                    <p>d</p>
                                                </>
                                            )
                                        } else if (nome.nome === 'Luz') {
                                            return (
                                                <>
                                                    <MdLightbulbOutline size="40%" color="white" /> 
                                                
                                                    <p>sd</p>
                                                </>
                                            )
                                        } else if (nome.nome === 'FireStickTv') {
                                            return (
                                                <>
                                                    <SiAmazonfiretv size="40%" color="white" /> 

                                                    <p>df</p>
                                                </>
                                            )
                                        } else if (nome.nome === 'ControleSmart') {
                                            return (
                                                <>
                                                    <RiRemoteControlLine size="40%" color="white" /> 

                                                    <p>a</p>
                                                </>
                                            )
                                        }
                                    })()
                                }                        
                            </li>
                        </div>
                    )
                }
            </DispositivosContent>
        </Container>
    );
}

export default TableDispositivos;