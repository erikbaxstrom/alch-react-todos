export default function Auth(username, password) {
  return (
    <>
      <h2>Auth</h2>
      <form>
        <label>Email</label>
        <input type="text" name="email" />
        <label>Password</label>
        <input type="text" name="password" />
        <button>Submit</button>
      </form>
    </>
  );
}
