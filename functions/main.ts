// Define the Contact type
interface Contact {
  name: string;
  email: string;
  phoneNumber?: string;
  company?: string;
}

// Contact list to store all contacts
const contactList: Contact[] = [];

// Function to add a contact
function add(contact: Contact): void {
  // Check if name or email is missing
  if (!contact.name || !contact.email) {
    console.log("Missing fields");
    return;
  }

  // Check for duplicate email
  const duplicate = contactList.find((c) => c.email === contact.email);
  if (duplicate) {
    console.log("Duplicate was found");
    return;
  }

  // Add contact to list
  contactList.push(contact);
  console.log(`${contact.name} was added`);
}

// Function to remove a contact by email
function remove(email: string): void {
  const index = contactList.findIndex((contact) => contact.email === email);

  if (index === -1) {
    console.log("Contact not found");
  } else {
    const removedContact = contactList.splice(index, 1)[0];
    console.log(`${removedContact.name} was removed`);
  }
}

// Function to edit an existing contact by email
function edit(email: string, newData: Partial<Contact>): void {
  const contact = contactList.find((c) => c.email === email);

  if (!contact) {
    console.log("Contact not found");
    return;
  }

  // Update fields if newData contains them
  contact.name = newData.name || contact.name;
  contact.phoneNumber = newData.phoneNumber || contact.phoneNumber;
  contact.company = newData.company || contact.company;

  console.log(`${contact.name} was updated`);
}

// Function to get a contact by email
function get(email: string): void {
  const contact = contactList.find((c) => c.email === email);

  if (!contact) {
    console.log("Contact not found");
  } else {
    console.log(`Name: ${contact.name}`);
    console.log(`Email: ${contact.email}`);
    console.log(`Phone number: ${contact.phoneNumber || "N/A"}`);
    console.log(`Company: ${contact.company || "N/A"}`);
  }
}

// Function to list all contacts
function listAll(): void {
  if (contactList.length === 0) {
    console.log("No contacts available");
    return;
  }

  const contactString = contactList
    .map((contact) => `${contact.name} ${contact.email}`)
    .join(", ");
  console.log(contactString);
}

// Function to clear the entire contact list
function clear(): void {
  contactList.length = 0;
  console.log("The contact list was cleared");
}

// Example usage:
add({ name: "Anna Valsdóttir", email: "ana@tskoli.is" });
add({ name: "Jón Jónsson", email: "jon@tskoli.is" });
add({
  name: "Hildur Eriksdóttir",
  email: "hildur@tskoli.is",
  phoneNumber: "123456789",
  company: "TechCompany",
});

listAll(); // Anna Valsdóttir ana@tskoli.is, Jón Jónsson jon@tskoli.is, Hildur Eriksdóttir hildur@tskoli.is
get("hildur@tskoli.is");

edit("jon@tskoli.is", { phoneNumber: "987654321", company: "NewCompany" });
get("jon@tskoli.is");

remove("ana@tskoli.is");
listAll();

clear();
listAll();
