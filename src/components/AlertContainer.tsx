import type {AlertType} from "../utils/types/AlertType.ts";
import {useAppSelector} from "../utils/hooks/useStore.ts";
import '../styles/Alert.css';

const AlertContainer = () => {

    const alerts: AlertType[] =useAppSelector(state => state.alert);

    return (
        <>
            {alerts?.length ? (
                <div className='alert-container'>
                    {alerts.map((alert: AlertType, index: number) => (
                        <div key={alert.text + index} className={`alert ${alert.level}`} role="alert">
                            {alert.text}
                        </div>
                    ))}
                </div>
            ) : null}
        </>
    )
}

export default AlertContainer;