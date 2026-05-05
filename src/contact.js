export function loadContact() {
    const content = document.querySelector('#content');
    content.innerHTML = ""; // Clear previous content

    const contactTitle = document.createElement("h1");
    contactTitle.innerText = "Contattaci";
    content.append(contactTitle);

    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-info");

    // Creating the address section
    const address = document.createElement("p");
    address.innerHTML = `<strong>Address:</strong><br> 
    Via delle Rocce, 42<br> 
    84017 Positano (SA), Italy`;

    // Creating the phone section
    const phone = document.createElement("p");
    phone.innerHTML = `<strong>Phone:</strong><br> 
    +39 089 123 4567`;

    // Creating the email section
    const email = document.createElement("p");
    email.innerHTML = `<strong>Email:</strong><br> 
    ciao@lecodipietra.it`;

    // A little extra "Maître d'" note
    const note = document.createElement("p");
    note.style.fontStyle = "italic";
    note.innerText = "For terrace seating, we recommend booking three sunsets in advance.";

    contactContainer.append(address, phone, email, note);
    content.append(contactContainer);
}