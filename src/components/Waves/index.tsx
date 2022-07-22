import { Container } from "./styles";
import { ReactComponent as WaveBottom } from "./wavesBottom.svg";
import { ReactComponent as WaveTop } from "./wavesTop.svg";

const Waves = () => {
    return (
        <Container>
            <WaveTop />
            <WaveBottom />
        </Container>
    );
};

export default Waves;
