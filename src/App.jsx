import './App.css'

function App() {
  const hadlerAddUser=event=>{
    event.preventDefault();
    const form=event.target;
    const name=form.name.value;
    const email=form.email.value;
    const user={name,email}
    console.log(user);
    fetch("http://localhost:5000/users",{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  return (
    <>
      <h1>user add</h1>
      <form onSubmit={hadlerAddUser}>
        <input type="text" name="name" id="" /><br />
        <input type="email" name="email" id="" /><br />
        <input type="submit" value="add user" />
      </form>
    </>
  )
}

export default App
