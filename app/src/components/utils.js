export const getContactList = async () => {
    const response = await fetch('/contact/Contact?', {
      method: `GET`,
      timeout: 0,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  
    return response.json();
  };

  export async function deleteContact(id) {
    const response = await fetch(`/contact/Contacts${id}`, {
      method: "DELETE",
    });
    return response.json();
  }