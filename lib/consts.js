import dotenv from 'dotenv';
dotenv.config();

export const THREADS_APP_ID = process.env.THREADS_APP_ID
export const GRAPHQL_ENDPOINT = process.env.GRAPHQL_ENDPOINT

export const ENDPOINTS_DOCUMENT_ID = {
  
    USER_PROFILE: process.env.USER_PROFILE,
    USER_PROFILE_THREADS: process.env.USER_PROFILE_THREADS,
    USER_PROFILE_THREADS_REPLIES: process.env.USER_PROFILE_THREADS_REPLIES,
    USER_REPLIES: process.env.USER_REPLIES,
    THREADS_REPLIES: process.env.THREADS_REPLIES,
    
}