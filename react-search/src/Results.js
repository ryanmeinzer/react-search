function Results(props) {

    // the below constant needed to be within a functional component to persist props without re-render in below map function
    const results = props.searchResult
    
    return (
        <div>
            <ul>
                {results.map(element => {
                    return <li key={element.id}>{element.title}</li>
                }
                )}
            </ul>
        </div>
    )
}
export default Results