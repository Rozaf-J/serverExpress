const url = "http://localhost:3000/";

async function userPost() {
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;

  const data = { name: name, age: age };

  try {
    await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      window.location.reload();
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

async function userDelete(id) {
  const data = { _id: id };

  try {
    await fetch(url, {
      method: "DELETE",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      window.location.reload();
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
}

async function userUpdate(name, age, i) {
  let name_set = document.getElementById("name." + i + "").value;
  let age_set = document.getElementById("" + age + "").value;

  const data = {
    old_name: name,
    old_age: age,
    new_name: name_set,
    new_age: parseInt(age_set),
  };

  try {
    await fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      window.location.reload();
    });
  } catch (error) {
    console.error("Ошибка:", error);
  }
}
