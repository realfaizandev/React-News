import Nav from "./Nav";
export default function Header({ getKeywords }) {
    const onChangeHandler = (event) => {
        getKeywords(event);
    }
    return (
        <>
            <header>
                <div className="logo">Awesome News</div>
                <input type="text" onChange={onChangeHandler}
                />
                <Nav />
            </header>
        </>
    );
}