import express from "express";
import cors from "cors";
import { sampleFoods, sampleTags } from "./data";

const app = express();
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:4200"],
    })
);

app.get("/api/foods", (req, res) => {
    res.send(sampleFoods);
});

app.get("/api/foods/search/:searchValue", (req, res) => {
    const value = req.params.searchValue;
    const foods = sampleFoods.filter((food) =>
        food.name.toLowerCase().includes(value.toLowerCase())
    );
    res.send(foods);
});

app.get("/api/foods/tags", (req, res) => {
    res.send(sampleTags);
});

app.get("/api/foods/tags/:tagName", (req, res) => {
    const tagName = req.params.tagName;
    const foods =
        tagName === "All"
            ? sampleFoods
            : sampleFoods.filter((food) => food.tags?.includes(tagName));

    res.send(foods);
});

app.get("/api/foods/:foodId", (req, res) => {
    const id = req.params.foodId;
    const food = sampleFoods.find((food) => food.id === id);
    res.send(food);
});

const port = 5000;
app.listen(port, () => {
    console.log("Successfully running on http://localhost:" + port);
});
