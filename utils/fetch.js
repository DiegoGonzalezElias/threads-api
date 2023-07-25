import { GRAPHQL_ENDPOINT, THREADS_APP_ID, ENDPOINTS_DOCUMENT_ID } from '../lib/consts.js'

const fetchBase = ({documentId, variables})=>{
    const body = new URLSearchParams();
    body.append('variables', JSON.stringify(variables));
    body.append('doc_id', `${documentId}`);
    console.log('DENTRO DEL FETCH',GRAPHQL_ENDPOINT)

    return fetch(GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Threads api client',
        'x-ig-app-id': THREADS_APP_ID,
      },
      body,
    })
      .then(response => response.json())
      .then(response => response.data)
      .catch(error => console.error(error));
}



export const fetchUserIdByName = ({ userName }) => {
    return fetch(`https://www.threads.net/@${userName}`, {
    headers: { 'sec-fetch-site': 'same-site' },
  })
    .then((res) => res.text())
    .then((html) => {
      const userId = html.match(/"user_id":"(\d+)"/)?.[1];
      return userId;
    });
        
}


export const fetchUserProfile = async ({ userId, userName }) => {
    if (userName && !userId){
        userId = await fetchUserIdByName({ userName })
    }

    const variables = { userID: userId }
    return fetchBase({ variables, documentId: ENDPOINTS_DOCUMENT_ID.USER_PROFILE})
}

export const fetchUserThreads = async ({ userId, userName }) => {
    if (userName && !userId){
        userId = await fetchUserIdByName({ userName })
    }

    const variables = { userID: userId }
    return fetchBase({ variables, documentId: ENDPOINTS_DOCUMENT_ID.USER_PROFILE_THREADS})

}


export const fetchUserReplies = async ({ userId, userName }) => {
  if (userName && !userId){
    userId = await fetchUserIdByName({ userName })
  }

  const variables = { userID: userId }
  return fetchBase({ variables, documentId: ENDPOINTS_DOCUMENT_ID.USER_REPLIES})
}


export const fetchThreadReplies = ({ threadId }) => {
  const variables = { postID: threadId }
  return fetchBase({ variables, documentId: ENDPOINTS_DOCUMENT_ID.THREADS_REPLIES})
}