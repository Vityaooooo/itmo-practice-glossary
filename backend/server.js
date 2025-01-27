require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors())

const initialData = [
    {
        term: "Деплой",
        definition: "Деплой в современной веб-разработке означает процесс переноса программного приложения из среды разработки в рабочую (продакшн). Часто он включает автоматизацию таких задач, как настройка серверов, установка приложений и пост-деплойное тестирование для обеспечения бесперебойной работы и доступности для пользователей.",
        link: "",
        relations: [
            { target: { term: "Docker" }, relationType: "упрощает" },
            { target: { term: "API Gateway" }, relationType: "зависит от" },
            { target: { term: "CI/CD" }, relationType: "автоматизирует" }
        ]
    },
    {
        term: "JavaScript",
        definition: "JavaScript — это универсальный и широко используемый язык программирования, который позволяет создавать интерактивные и динамичные веб-приложения. Он поддерживает разработку как на стороне клиента, так и на стороне сервера, а также интеграцию с HTML и CSS для создания отзывчивых и ориентированных на пользователя интерфейсов.",
        link: "",
        relations: [
            { target: { term: "Node.js" }, relationType: "используется с" },
            { target: { term: "Frontend" }, relationType: "используется для" },
            { target: { term: "Backend" }, relationType: "используется для" }
        ]
    },
    {
        term: "Node.js",
        definition: "Node.js — это среда выполнения, которая позволяет разработчикам выполнять JavaScript-код на стороне сервера, обеспечивая возможность полной веб-разработки с использованием одного языка программирования. Она известна своей событийно-ориентированной, неблокирующей моделью ввода-вывода, что делает ее идеальной для создания масштабируемых и интенсивных по данным приложений.",
        link: "",
        relations: [
            { target: { term: "Backend" }, relationType: "используется для" },
            { target: { term: "Fastify" }, relationType: "является основой" },
            { target: { term: "NestJS" }, relationType: "поддерживается" }
        ]
    },
    {
        term: "Express",
        definition: "Express.js — это легковесный и гибкий фреймворк для Node.js, предоставляющий инструменты и функции для создания веб-приложений и API. Он упрощает управление маршрутизацией, middleware и HTTP-запросами, позволяя создавать модульные приложения.",
        link: "",
        relations: [
            { target: { term: "Node.js" }, relationType: "основан на" },
            { target: { term: "REST API" }, relationType: "реализует" },
            { target: { term: "Backend" }, relationType: "используется для" }
        ]
    },
    {
        term: "REST API",
        definition: "REST API (интерфейс программирования приложений на основе архитектурного стиля REST) позволяет взаимодействовать с веб-службами через stateless-операции с использованием стандартных HTTP-методов. Он обеспечивает легковесный и масштабируемый способ взаимодействия систем, часто используя форматы JSON или XML для обмена данными.",
        link: "",
        relations: [
            { target: { term: "Express" }, relationType: "реализуется в" },
            { target: { term: "Backend" }, relationType: "используется в" }
        ]
    },
    {
        term: "CI/CD",
        definition: "CI/CD (Continuous Integration/Continuous Deployment) — это набор практик, направленных на автоматизацию интеграции кода, тестирования и развертывания приложений. CI/CD помогает разработчикам чаще и безопаснее вносить изменения в код, минимизируя риски ошибок при поставке программного обеспечения.",
        link: "",
        relations: [
            { target: { term: "Docker" }, relationType: "использует" },
            { target: { term: "Git" }, relationType: "зависит от" }
        ]
    },
    {
        term: "Веб-разработка",
        definition: "Веб-разработка — это процесс проектирования, создания и обслуживания веб-сайтов и веб-приложений, доступных через интернет. Она включает разработку клиентской части (frontend) и серверной части (backend), с использованием таких технологий, как HTML, CSS, JavaScript и различные базы данных.",
        link: "",
        relations: [
            { target: { term: "Frontend" }, relationType: "включает" },
            { target: { term: "Backend" }, relationType: "включает" },
            { target: { term: "Деплой" }, relationType: "включает" }
        ]
    },
    {
        term: "Микросервисная архитектура",
        definition: "Разделение монолитных приложений на небольшие независимые сервисы, взаимодействующие через API.",
        link: "",
        relations: [
            { target: { term: "API Gateway" }, relationType: "включает" },
            { target: { term: "Moleculer" }, relationType: "поддерживает" },
            { target: { term: "Backend" }, relationType: "используется в" }
        ]
    },
    {
        term: "Fastify",
        definition: "Высокопроизводительный веб-фреймворк для Node.js, ориентированный на скорость и низкое потребление ресурсов.",
        link: "",
        relations: [
            { target: { term: "Backend" }, relationType: "используется для" },
            { target: { term: "API Gateway" }, relationType: "может реализовываться" }
        ]
    },
    {
        term: "Moleculer",
        definition: "Фреймворк для микросервисов с поддержкой распределённых систем, событийной модели и брокеров сообщений.",
        link: "",
        relations: [
            { target: { term: "Backend" }, relationType: "используется для" },
            { target: { term: "Микросервисная архитектура" }, relationType: "поддерживает" }
        ]
    },
    {
        term: "NestJS",
        definition: "Прогрессивный фреймворк для создания серверных приложений с использованием TypeScript и модульной архитектуры.",
        link: "",
        relations: [
            { target: { term: "Backend" }, relationType: "используется для" },
            { target: { term: "Node.js" }, relationType: "поддерживается" }
        ]
    },
    {
        term: "API Gateway",
        definition: "Центральный компонент микросервисной архитектуры, обрабатывающий запросы и маршрутизирующий их к нужным сервисам.",
        link: "",
        relations: [
            { target: { term: "Fastify" }, relationType: "может реализовываться" },
            { target: { term: "Микросервисная архитектура" }, relationType: "включён в" }
        ]
    },
    {
        term: "MongoDB",
        definition: "Документоориентированная база данных, использующая формат JSON-подобных документов.",
        link: "",
        relations: [
            { target: { term: "Backend" }, relationType: "используется с" }
        ]
    },
    {
        term: "Semantic Graph",
        definition: "Графовая структура данных, описывающая отношения между терминами и их определениями.",
        link: "",
        relations: []
    },
    {
        term: "Docker",
        definition: "Платформа для контейнеризации, позволяющая упаковывать приложения и их зависимости в единый контейнер.",
        link: "",
        relations: [
            { target: { term: "Деплой" }, relationType: "упрощает" },
            { target: { term: "CI/CD" }, relationType: "используется в" }
        ]
    },
    {
        term: "Frontend",
        definition: "Визуальная часть приложения, взаимодействующая с пользователем.",
        link: "",
        relations: [
            { target: { term: "JavaScript" }, relationType: "используется для" }
        ]
    },
    {
        term: "Backend",
        definition: "Серверная часть приложения, обрабатывающая запросы и выполняющая бизнес-логику.",
        link: "",
        relations: [
            { target: { term: "Fastify" }, relationType: "используется в" },
            { target: { term: "Moleculer" }, relationType: "используется в" },
            { target: { term: "NestJS" }, relationType: "используется в" },
            { target: { term: "Express" }, relationType: "используется в" },
            { target: { term: "REST API" }, relationType: "используется в" },
            { target: { term: "Микросервисная архитектура" }, relationType: "включает" }
        ]
    }
];


// Подключение к MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};
connectDB();


const GlossarySchema = new mongoose.Schema({
  term: {type: String, required: true},
  definition: {type: String, required: true},
  references: [String],
  link: {type: String, required: false},
  relations: [{
      target: {type: mongoose.Schema.Types.ObjectId, ref: "Glossary"},
      relationType: {type: String},
  },],
});

const Glossary = mongoose.model("Glossary", GlossarySchema);

// CRUD API
app.get("/api/terms", async (req, res) => {
    try {
        const terms = await Glossary.find().populate("relations.target", "term definition");
        res.json(terms);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
});


app.post("/api/terms", async (req, res) => {
    const {term, definition, references, relations, link} = req.body;

    try {
        const newTerm = new Glossary({
            term, definition, references, link, relations: relations || [], // Поддержка связей
        });

        await newTerm.save();
        res.status(201).json(newTerm);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});


app.put("/api/terms/:id", async (req, res) => {
    const {relations} = req.body;

    try {
        // Найдите и обновите термин с учетом новых связей
        const updatedTerm = await Glossary.findByIdAndUpdate(req.params.id, {$set: {relations}}, {new: true});

        res.json(updatedTerm);
    } catch (error) {
        console.error(error);
        res.status(400).json({message: error.message});
    }
});

app.delete("/api/terms/:id", async (req, res) => {
    await Glossary.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

// Очистка базы данных
app.delete("/api/clear", async (req, res) => {
    try {
        await Glossary.deleteMany({});
        res.status(200).json({ message: "База данных успешно очищена" });
    } catch (error) {
        console.error("Ошибка при очистке базы данных:", error.message);
        res.status(500).json({ message: "Ошибка при очистке базы данных", error: error.message });
    }
});

app.post("/api/seed", async (req, res) => {
    try {
        // Очистка базы данных перед добавлением новых данных
        await Glossary.deleteMany({});

        // Добавляем термины с обработкой связей
        const terms = await Promise.all(
            initialData.map(async (item) => {
                const term = new Glossary({
                    term: item.term,
                    definition: item.definition,
                    references: [],
                    relations: [],
                    link: item.link // Связи добавляются отдельно
                });
                return await term.save();
            })
        );

        // Обновляем связи между терминами
        for (const item of initialData) {
            const sourceTerm = terms.find((t) => t.term === item.term);
            for (const relation of item.relations) {
                const targetTerm = terms.find((t) => t.term === relation.target.term);
                if (targetTerm) {
                    sourceTerm.relations.push({
                        target: targetTerm._id,
                        relationType: relation.relationType
                    });
                }
            }
            await sourceTerm.save();
        }

        res.status(201).json({ message: "Начальные данные успешно добавлены", terms });
    } catch (error) {
        console.error("Ошибка при добавлении начальных данных:", error.message);
        res.status(500).json({ message: "Ошибка при добавлении начальных данных", error: error.message });
    }
});

// Роут для получения отформатированных данных
app.get("/api/terms/format", async (req, res) => {
    try {
        // Получаем термины из базы данных с заполнением связей
        const terms = await Glossary.find().populate("relations.target", "term definition");

        // Функция для преобразования данных
        const mapDataToNodesAndEdges = (data) => {
            const nodes = [];
            const edges = [];

            // Создаем узлы
            data.forEach((item) => {
                nodes.push({
                    id: item._id,
                    data: { label: item.term },
                    position: { x: Math.random() * 800, y: Math.random() * 600 }, // Случайные позиции
                });

                // Создаем связи
                item.relations.forEach((relation) => {
                    edges.push({
                        id: `e${item._id}-${relation.target._id}`,
                        source: item._id,
                        target: relation.target._id,
                        animated: true,
                        label: relation.relationType,
                    });
                });
            });

            return { nodes, edges };
        };

        // Преобразуем данные
        const formattedData = mapDataToNodesAndEdges(terms);

        res.status(200).json(formattedData);
    } catch (error) {
        console.error("Ошибка при форматировании данных:", error.message);
        res.status(500).json({ message: "Ошибка при форматировании данных", error: error.message });
    }
});

// Роут для получения данных в формате: id, title, description
app.get("/api/terms/glossary", async (req, res) => {
    try {
        // Получаем все термины из базы данных
        const terms = await Glossary.find({}, "_id term definition");

        // Преобразуем термины в нужный формат
        const formattedTerms = terms.map((term) => ({
            id: term._id,
            title: term.term,
            description: term.definition,
            link: term.link
        }));

        res.status(200).json(formattedTerms);
    } catch (error) {
        console.error("Ошибка при получении терминов:", error.message);
        res.status(500).json({ message: "Ошибка при получении данных", error: error.message });
    }
});


// Запуск сервера
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
