export default function Tool() {
  return (
    <div
      className="Toolbar"
      onClick={() => {
        alert("You clicked on the toolbar!");
      }}
    >
      <div>
        <button onClick={() => alert("Playing!")}>Play Movie</button>
        <div>
          <button onClick={() => alert("Uploading!")}>Upload Image</button>
        </div>
      </div>
    </div>
  );
}
