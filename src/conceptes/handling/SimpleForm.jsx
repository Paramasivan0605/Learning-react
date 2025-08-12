export default function SimpleForm() {
    const handleSubmit = (event) => {
        console.log(event.target.name.value);
        console.log(event.target.email.value);
        event.preventDefault(); // Prevents the default form submission behavior

    }
    return <>
    <h1>Simple Form</h1>
    <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Enter name"/>
        <input type="email" name="email" placeholder="Enter email"/>
        <button type="submit" className="bg-color"> Submit</button>
    </form>
    </>

}