import { fetchUserProfile, fetchUserThreads, fetchUserReplies, fetchThreadReplies } from '../../utils/fetch.js'

export const getUserData = async(req, res) => {

    const userId = req.query.userId ?? undefined
    const userName = req.query.userName ?? undefined

    if(!userId && !userName){
        return new res.send("You must expecify at least One parameter.")
    }

    const data = await fetchUserProfile({userId, userName})


    return res.send(JSON.stringify(data))
}

export const getUserThreads = async(req, res) => {

    const userId = req.query.userId ?? undefined
    const userName = req.query.userName ?? undefined

    if(!userId && !userName){
        return new res.send("You must expecify at least One parameter.")
    }

    const data = await fetchUserThreads({userId, userName})


    return res.send(JSON.stringify(data))
}

export const getUserReplies = async(req, res) => {

    const userId = req.query.userId ?? undefined
    const userName = req.query.userName ?? undefined

    if(!userId && !userName){
        return new res.send("You must expecify at least One parameter.")
    }

    const data = await fetchUserReplies({userId, userName})


    return res.send(JSON.stringify(data))
}


export const getThreadsReplies = async(req, res) => {

    const threadId = req.query.threadId ?? undefined

    if(!threadId){
        return new res.send("You must expecify at least One parameter.")
    }

    const data = await fetchThreadReplies({ threadId })


    return res.send(JSON.stringify(data))
}

