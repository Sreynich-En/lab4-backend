import { journalists, articles } from "../models/data.js";

export function getAllJournalists(req, res) {
    res.json(journalists);
}

export function getJournalistById(req, res) {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find((journalist) => journalist.id === journalistId);
    if (!journalist) return res.status(404).json({ error: "Journalist not found" });
    res.json(journalist);
}

export function createJournalist(req, res) {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });
    const newJournalist = {
        id: journalists.length ? journalists[journalists.length - 1].id + 1 : 1,
        name
    };
    journalists.push(newJournalist);
    res.status(201).json(newJournalist);
}

export function updateJournalist(req, res) {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find((journalist) => journalist.id === journalistId);
    if (!journalist) return res.status(404).json({ error: "Journalist not found" });

    const { name } = req.body;
    if (name) journalist.name = name;

    res.json(journalist);
}

export function deleteJournalist(req, res) {
    const journalistId = parseInt(req.params.id);
    const journalistIndex = journalists.findIndex((journalist) => journalist.id === journalistId);
    if (journalistIndex === -1) return res.status(404).json({ error: "Journalist not found" });
    journalists.splice(journalistIndex, 1);
    res.status(204).send();
}

export function getArticlesByJournalistId(req, res) {
    const journalistId = parseInt(req.params.id);
    const journalist = journalists.find((journalist) => journalist.id === journalistId);
    if (!journalist) return res.status(404).json({ error: "Journalist not found" });

    const journalistArticles = articles.filter((article) => article.journalistId === journalistId);
    if (journalistArticles.length === 0) return res.status(404).json({ error: "No articles found for this journalist" });

    res.json(journalistArticles);
}