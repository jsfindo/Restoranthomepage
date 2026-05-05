export function loadHome() {
    const content = document.querySelector('#content');
    
    // Always clear the content first so pages don't stack on top of each other
    content.innerHTML = "";

    const namelogo = document.createElement("h1");
    namelogo.innerText = "L'Eco di Pietra";
    namelogo.classList.add("name");

    const welcoming = document.createElement("h2");
    welcoming.innerText = "Benvenuti a casa.";

    const intro = document.createElement("h3");
    intro.innerText = "Here, the clock slows down to the pace of the tides. At L'Eco di Pietra, we don't just serve recipes; we serve memories etched in stone and seasoned by the sea. Whether you’ve come for the crisp snap of our handmade crust or a quiet corner to share a secret, you are part of our story now. Pull up a chair, breathe in the scent of wild basil, and let the echo of the coast guide your appetite.";

    const aboutHead = document.createElement("h2");
    aboutHead.innerText = "Our story";

    const story = document.createElement("h3");
    story.innerText = `In the heart of the Amalfi Coast, tucked away from the bustling tourist trails, lies L'Eco di Pietra. It wasn't always a restaurant; in the 1920s, it was the private kitchen of Nonna Elide, a woman rumored to be able to "hear the grapes growing."

The legend goes that Elide discovered a specific hollow in the cliff wall where the ocean breeze whistled through. She believed the stone walls absorbed the laughter of every meal, "echoing" that warmth back into the food.

Today, her great-grandson Luca runs the kitchen. He hasn't changed a thing—the tables are still reclaimed olive wood, and the menu is still dictated by the local fishermen. As Luca says, "We don't just serve recipes; we serve memories etched in stone."`;

    // Append everything to the container
    content.append(namelogo);
    content.append(welcoming);
    content.append(intro);
    content.append(aboutHead);
    content.append(story);
}