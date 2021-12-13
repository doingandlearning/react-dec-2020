import React from "react"

function LikePanel() {

    const [myState, setMyState] = React.useState({
        likes: 0,
    })

    // Run this code after first render only.
    React.useEffect(() => { 
        let likesFromLocalStorage = Number(window.localStorage.likes)
        if (!isNaN(likesFromLocalStorage)) { 
            console.log(`Read likes=${likesFromLocalStorage} from local storage`)
            setMyState({likes: likesFromLocalStorage})
        }
    }, [])

    React.useEffect(() => { 
        window.localStorage.likes = myState.likes
        console.log(`Written likes=${myState.likes} to local storage`)
    }, [myState.likes])

    function onLike() {
        setMyState({likes: myState.likes + 1})
    }

    function onResetLikes() {
        setMyState({likes: 0})
    }

    return (
        <div className='likePanel'>
            <h2>Like My Library</h2>
            <span>Likes: <b>{myState.likes}</b></span>&nbsp;
            <button onClick={() => onLike()}>Like</button>
            <button onClick={() => onResetLikes()}>Reset like count</button>
        </div>
    )
}

export default LikePanel;