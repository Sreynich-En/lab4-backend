import { categories,articles } from "../models/data.js";

export function getAllCategories(req, res) {
    res.json(categories);
}

export function getCategoryById(req, res) {
    const categoryId = parseInt(req.params.id);
    const category = categories.find((category) => category.id === categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.json(category);
}

export function createCategory(req, res) {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Name is required" });
    const newCategory = {
        id: categories.length ? categories[categories.length - 1].id + 1 : 1,
        name
    };
    categories.push(newCategory);
    res.status(201).json(newCategory);
}

export function updateCategory(req, res) {
    const categoryId = parseInt(req.params.id);
    const category = categories.find((category) => category.id === categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });

    const { name } = req.body;
    if (name) category.name = name;

    res.json(category);
}

export function deleteCategory(req, res) {
    const categoryId = parseInt(req.params.id);
    const categoryIndex = categories.findIndex((category) => category.id === categoryId);
    if (categoryIndex === -1) return res.status(404).json({ error: "Category not found" });
    categories.splice(categoryIndex, 1);
    res.status(204).send();
}

export function getArticlesByCategoryId(req, res) {
    const categoryId = parseInt(req.params.id);
    const category = categories.find((category) => category.id === categoryId);
    if (!category) return res.status(404).json({ error: "Category not found" });

    const articlesByCategory = articles.filter((article) => article.categoryId === categoryId);
    if (articlesByCategory.length === 0) return res.status(404).json({ error: "No articles found for this category" });
    res.json(articlesByCategory);
}

