import { GEMINI_API_KEY } from "./constants";

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

export const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-8b" });