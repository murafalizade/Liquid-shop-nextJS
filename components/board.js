
function calc(val) {
    return val + 1000;
}
function Board({ value }) {
    return (
        <div>
            {calc(value)}
        </div>
    )
}

export default Board;