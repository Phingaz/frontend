import styled from "./Work.module.css"
import { Reveal } from "./Reveal"


export const Work = () => {
    return (
        <div id="work" className={styled.work}>
            <div className={styled.container}>
                <Reveal delay={0.2}>
                    <h1>Work<span>.</span> <hr /></h1>
                </Reveal>
            </div>
        </div>
    )
}

