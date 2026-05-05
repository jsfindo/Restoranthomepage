export function loadMenu() {
    const content = document.querySelector('#content');
    content.innerHTML = ""; // Clear homepage content

    const menuTitle = document.createElement("h1");
    menuTitle.innerText = "Il Nostro Menù";
    content.append(menuTitle);

    const menuGrid = document.createElement("div");
    menuGrid.classList.add("menu-grid");

    // Array of dishes to keep the code clean
    const dishes = [
        { name: "Bruschetta al Pomodoro", price: "€8", desc: "Toasted sourdough, heirloom tomatoes, garlic, and basil." },
        { name: "Calamari Fritti", price: "€14", desc: "Lightly floured squid served with a spicy marinara." },
        { name: "Spaghetti alle Vongole", price: "€18", desc: "Fresh clams, white wine, garlic, and parsley." },
        { name: "Gnocchi alla Sorrentina", price: "€16", desc: "Potato gnocchi, tomato sauce, mozzarella, and basil." },
        { name: "Risotto ai Funghi", price: "€20", desc: "Creamy carnaroli rice with wild porcini mushrooms." },
        { name: "Pollo alla Cacciatora", price: "€22", desc: "Braised chicken with olives, bell peppers, and rosemary." },
        { name: "Bistecca alla Fiorentina", price: "€35", desc: "Grilled T-bone steak seasoned with sea salt and olive oil." },
        { name: "Tiramisu della Nonna", price: "€9", desc: "The classic espresso-soaked ladyfingers and mascarpone." },
        { name: "Acqua Naturale/Frizzante", price: "€4", desc: "Chilled mineral water from the local springs." },
        { name: "Limonata della Casa", price: "€6", desc: "Our signature house Italian lemon drink, made with Amalfi lemons." }
    ];

    // Create HTML for each dish
    dishes.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.innerText = `${item.name} — ${item.price}`;

        const itemDesc = document.createElement("p");
        itemDesc.innerText = item.desc;

        itemDiv.append(itemName, itemDesc);
        menuGrid.append(itemDiv);
    });

    content.append(menuGrid);
}