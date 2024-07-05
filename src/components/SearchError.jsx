export function SearchError({ errorMessage }) {
    return (
        <div
            style={{
                backgroundColor: 'red',
                color: 'white',
                fontWeight: 'bold',
                boxShadow: '0 0 5px 0 #ccc',
            }}
        >
            <h4>{errorMessage}</h4>
        </div>
    )
}
