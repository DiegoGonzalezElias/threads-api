import express from "express";
import { getUserData, getUserThreads, getUserReplies, getThreadsReplies } from '../controllers/controllers.js'

const router = express.Router();

router.get('/api/user', getUserData)
router.get('/api/threads', getUserThreads)
router.get('/api/replies', getUserReplies)
router.get('/api/thread-replies', getThreadsReplies)

export default router