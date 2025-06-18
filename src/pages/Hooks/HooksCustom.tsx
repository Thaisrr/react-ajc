import {useMouseLocation} from "../../utils/hooks/useMouseLocation.ts";

const HooksCustom = () => {

    const {x, y} = useMouseLocation();


    return (
        <>
            <h1>Les hooks custom</h1>

            <p>X : {x}</p>
            <p>Y : {y}</p>
        </>
    )
}

export default HooksCustom;