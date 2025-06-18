import React from "react";

type Props = object;
type State = {counter: number}

class ClasseComponent extends React.Component<Props, State> {
    message = 'Hello World';

    state: State = {counter: 0};

    interval?: number;

    constructor(props: Props) {
        super(props);
        console.log('Constructor');
    }

    updateMessage() {
        this.message = 'Nouveau message';
    }

    // TODO : why ????
    increment = () => {
        this.setState({counter: this.state.counter + 1});
        console.log("Increment counter");
    }

    componentDidMount() {
        console.log('Component mounted');
        // Lancer les actions qu'on veut au démarrage du composant
        // Exemple appel API
        let time = 0;
        this.interval = setInterval(() => {
            time++;
            console.log(time)
        }, 1000)
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>): string {
        console.log('Before update', prevState, prevProps);
        return "Hello From before update";
    }

    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot: string) {
        console.log('componentDidUpdate', prevState, prevProps, snapshot);
    }


    componentWillUnmount() {
        console.log('Component componentWillUnmount');
        // Pour désouscrire à des observables, des streams
        clearInterval(this.interval);
    }

    render() {
        return (
            <>
                <h1>Classe Component</h1>
                <p>{this.message}
                    <button onClick={this.updateMessage}>Update</button>
                </p>

                <p>
                    <button onClick={this.increment}>{this.state.counter}</button>
                </p>
            </>
        )
    }

}

export default ClasseComponent;