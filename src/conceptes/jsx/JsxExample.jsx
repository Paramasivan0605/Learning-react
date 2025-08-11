import "../../App.css";
export default function JsxExample() {
    const name = "Siva";
    return <div>
                <h1 className="bg-color">Hello, {name}!</h1>
                <p style={{ backgroundColor:"red", border:"3px solid black" }}>This is samples</p>
    </div>
}