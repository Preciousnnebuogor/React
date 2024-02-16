export default function HandleEvent() {
    function handleSubmit () {
     console.log("i am okay")
    }
    return <div>
        <button onCanPlay={handleSubmit}></button>
    </div>
}