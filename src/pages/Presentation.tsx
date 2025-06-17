import '../styles/Presentation.css';

const Presentation = () => {
    const name = 'Jean Michel';
    const age = 456;
    const bool = false;
    const stringReloue = `< une string avec des crochets > et des { accolades }`;
    const jsx = <span>Je suis un span</span>
    const maClasse = 'red';
    //const image = 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif';
    const image = {
        source: 'https://c.tenor.com/LuZ1mK2ODfUAAAAC/cat-galaxy.gif',
        description : 'Un chat à lunette dans la galaxy',
        titre : 'Galaxy Cat',
    }
    const isLogged = false;

    const LoggedBlock = () => (
        <>
            <h3>Bienvenue {name}</h3>
            <p><button>Mon profil</button></p>
        </>
    );

    const LoggedOutBlock = () => (
        <>
            <h3>Veuillez vous connecter</h3>
            <p>
                <button>Connexion</button>
                <button>Inscription</button>
            </p>
        </>
    );

    type RoleType = 'USER' | 'ADMIN' | 'SUPER';
    const role: RoleType = 'USER';

    const RoleBlock = () => {
        if(role === 'USER'){
            return <p>Vous êtes utilisateur•trice</p>
        }
        if(role === 'ADMIN') {
            return <p>Vous êtes admin</p>
        }
        if(role === 'SUPER'){
            return <p>Vous êtes tout•e puissant</p>
        }
    }

    // Assignation conditionnelle
    let foo;
    // falsy : null, undefined, "" ( empty string ), false, 0
    if(foo) {
        console.log('Foo est truthy');
    }
    // Assigner une valeur si foo est falsy
    if(!foo) {
        foo = 'default value';
    }
    foo = foo || 'default value';
    foo ||= 'default value';

    // assigner une valeur si foo est truthy
    if(foo) {
        foo = "Nouvelle valeur"
    }
    foo = foo && "Nouvelle valeur";
    foo &&= "Nouvelle valeur";

    let ageUser = 0;
    if(!ageUser || ageUser !== 0) {
        ageUser = 10;
    }

    // si ageUser est null ou undefined, alors on lui passe une valeur par défaut
    ageUser = ageUser ?? 10;
    ageUser ??= 10;

    const fruits = ['Peche', 'Pomme', 'Poire', 'Orange'];

    //const fruitsModified = fruits.map(fruit => fruit.toUpperCase());

    const users = [
        {id: 1, name: 'Jean Michel 1'},
        {id: 2, name: 'Jean Michel 2'},
        {id: 3, name: 'Jean Michel 3'},
        {id: 4, name: 'Jean Michel 4'},
        {id: 5, name: 'Jean Michel 5'},
        {id: 6, name: 'Jean Michel 6'},
    ];

    const UsersGrid = () => {
        const articles = users.map(u => <article key={u.id}>{u.name}</article>);
        return <div className="container">{articles}</div>
    }




    return (
        <>
            <h1>Présentation</h1>

            <section>
                <h2>L'interpolation</h2>

                <p>C'est le fait d'interpréter du JS, du code, dans le HTML, ou le JSX.</p>
                <p>2 + 2 = { 2 + 2 } </p>
                <p>Bienvenue {name}, age {age} ans</p>
                <p>Mon boolean : {bool}</p>
                <p>{stringReloue}</p>
                <p>{jsx}</p>
                <p>{'{text entre accolades}'}</p>
                <p>{'<text entre crochets>'}</p>

            </section>
            <section>
                <h2>Data Binding / Attribute Binding</h2>

                <p>C'est le fait de passer des informations du Javascript vers le HTML.
                    L'interpolation est un type de data binding ( on interpréte le JS dans le contenu des balises )
                    L'attribute binding : on interpréte le JS dans les attributs HTML.
                </p>

                <p className="red">J'ai la classe red</p>
                <p className={maClasse}>J'ai la classe red aussi ( mais dynamiquement )</p>

                <figure>
                    <img src={image.source} alt={image.description}/>
                    <figcaption>{image.titre}</figcaption>
                </figure>

                <p>On peut binder du js dans n'importe quel attribut HTML.</p>
            </section>
            <section>
                <h2>La gestion des images locale</h2>

                <p>Pour les images utilisées en HTML, l'image doit être rangée dans le dossier public.</p>
                <p>Pour les images utilisées en CSS ( BG-image ), l'image doit être rangée dans le dossier src/assets</p>
                <img src="vite.svg" alt="logo de vite"/>
                <div className="bg"></div>
            </section>
            <section>
                <h2>Le style</h2>
                <p>Le style doit être rangé dans un dossier "style", dans src, et / ou "assets".</p>
                <p>En général, on fait un fichier css par composant, nommé avec le même nom.</p>
                <p>Le fichier CSS doit être importé dans le composant.</p>
                <p>Le style s'applique aux composants enfants.</p>
            </section>
            <section>
                <h2>L'affichage conditionnel</h2>

                <h3>Ternaire ( Si oui, si non )</h3>
                {isLogged ?<p>Bienvenue Jean Michel</p> : <p>Vous n'êtes pas conneté•e</p>}

                <p>
                    {isLogged ? 'Bienvenue' : 'Veuillez vous connecter'}
                </p>

                {isLogged ? <LoggedBlock /> : <LoggedOutBlock />}

                <h3>Switch / If plus complexe</h3>

                <RoleBlock />

                <h3>Si tout court</h3>

                {isLogged ? <button>Logout</button> : null}

                {isLogged && <button>Logout</button>}
                {isLogged || <button>Login</button>}
                { ageUser ?? <p>Age non renseigné</p>}
                {/* Affiche l'age si il est défini, sinon l'autre valeur car age est un number */}
            </section>
            <section>
                <h2>Les listes</h2>

                <ul>
                    {fruits.map(fruit => <li key={fruit}>{fruit}</li>)}
                </ul>

                {users.map(u => <article key={u.id}>{u.name}</article>)}

                <UsersGrid />
            </section>
        </>
    )
}

export default Presentation;